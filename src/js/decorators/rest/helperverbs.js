//usage: @Get('/:id?') searchClientById(id){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
/**
 * 
 * @param {*} target 
 * @param {*} key 
 * @param {*} descriptor 
 * @param {*} verb 
 * @param {*} params 
 */
export const setVerbsMeta = function(target, key, descriptor, verb, params) {
    onlyOnMethods(descriptor, verb);
    let value = typeof params[0] === 'object' ? params[0] : { url: params[0] };
    value.verb = verb;
    setMeta(target, `methods.${key}.${verb}`, value);
}
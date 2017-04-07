import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
/**
 * 
 * @param {*} params 
 */
export const Param = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Param');
        setMeta(target, `methods.${key}.params`, params[0], true);
    };
}
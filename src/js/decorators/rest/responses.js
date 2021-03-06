//usage: @Responses( {'200':'Ok','400':'Error'}) searchClientById(id){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
/**
 * 
 * @param {*} params 
 */
export const Responses = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Responses');
        Object.keys(params[0]).forEach(code => {
            setMeta(target, `methods.${key}.responses.${code}`, params[0][code]);
        });
    };
}
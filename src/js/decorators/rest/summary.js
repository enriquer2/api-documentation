//usage: @Summary('search client') searchClientByDni(dni){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
/**
 * It save in Metadata a brief summary
 * @function
 * @export
 * @example @Sumary('search client')
 * addPath(path)
 * @returns {function} Add information in Metadata
 * @param {string} params A small summary of this function
 */
export const Summary = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Summary');
        setMeta(target, `methods.${key}.summary`, params[0]);
    };
}
//usage: @Path('/clients') class Client {...}
import { setMeta } from '../api';
import { onlyOnClasses } from '../utils';
/**
 * @constructor
 * @param {string} params Indicates de path of this decorator
 */
export const Path = function(...params) {
    return function(target, key, descriptor) {
        onlyOnClasses(descriptor, 'Path')
        setMeta(target, 'class.path', params[0])
    };
}
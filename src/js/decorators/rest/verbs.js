import { setVerbsMeta } from './helperverbs';
/**
 * 
 * @param {*} params 
 */
export const Delete = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'delete', params);
    };
}

/**
 * 
 * @param {*} params 
 */
export const Get = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'get', params);
    };
}

/**
 * 
 * @param {*} params 
 */
export const Patch = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'patch', params);
    };
}

/**
 * 
 * @param {*} params 
 */
export const Post = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'post', params);
    };
}

/**
 * 
 * @param {*} params 
 */
export const Put = function(...params) {
    return function(target, key, descriptor) {
        setVerbsMeta(target, key, descriptor, 'put', params);
    };
}
// One of the differences between null and undefined is how they are treated differently in JSON.stringify()
JSON.stringify({a: null})      // '{"a":null}'
JSON.stringify({a: undefined}) // '{}'

JSON.stringify([null])         // '[null]'
JSON.stringify([undefined])    // '[null]'

// This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.
// You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.

undefinedToNull({a: undefined, b: 'BFE.dev'})
// {a: null, b: 'BFE.dev'}

undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})
// {a: ['BFE.dev', null, 'bigfrontend.dev']}

/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg) {
    if (arg === undefined) {
        return null;
    } else if (Array.isArray(arg)) {
        return arg.map(undefinedToNull)
    } else if (Object.prototype.toString.call(arg) === '[object Object]') {
        return Object.keys(arg).reduce((acc, currentKey) => ({
        ...acc,
        [currentKey]: undefinedToNull(arg[currentKey]),
        }), {});
    }
    return arg;
}
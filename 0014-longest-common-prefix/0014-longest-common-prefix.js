/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < maxPrefixLength; i++) {
        let char = strs[0][i];
        if (strs.every(str => str[i] === char)) {
            result += char;
        } else {
            break;
        }
    };  
    return result;
};
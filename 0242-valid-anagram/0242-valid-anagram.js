/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sObject = {};
    let tObject = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (sObject[char]) {
            sObject[char]++;
        } else {
            sObject[char] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (tObject[char]) {
            tObject[char]++;
        } else {
            tObject[char] = 1;
        }
    }

    console.log(tObject, sObject);
    if (Object.values(tObject).length !== Object.values(sObject).length) {
        return false;
    }
    
    for (let key in tObject) {
        if (tObject[key] !== sObject[key]) {
            return false;
        }
    }
    return true;
};
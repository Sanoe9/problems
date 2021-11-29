/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let string1 = '';
    let string2 = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            string1 = string1.slice(0, -1);
        } else {
            string1 += s[i];
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            string2 = string2.slice(0, -1);
        } else {
            string2 += t[i];
        }
    }
    
    return string1 === string2;
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    // loop over one string, and check if each char exists in the other string, if it does, then remove that char from the other string and continue the loop, if it doesnt exist then return false
    let tArray = t.split('');
    
    for (let i = 0 ; i < s.length; i++) {
        const char = s[i];
        
        const index = tArray.indexOf(char);
        
        if (index !== -1) {
            tArray.splice(index, 1);
        } else {
            return false;
        }
    }
    
    return tArray.length === 0;
};
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let array = [];
    
    if (x < 0) {
        return false;
    }
    
    while (x > 0) {
        const y = x % 10;
        array.push(y);
        x = Math.floor(x / 10);
    }
    
    return JSON.stringify(array) === JSON.stringify(array.reverse())
};

const isPalindrome1 = x => {
    return String(x).split('').reverse().join('') === String(x);
};
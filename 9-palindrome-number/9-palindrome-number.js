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

const isPalindrome2 = x => {
    if (x < 0) {
        return false;
    }

    let array = [];
    while (x != 0) {
        array.push(x % 10);
        x = Math.floor(x / 10);
    }

    return array.join('') === array.reverse().join('');
}
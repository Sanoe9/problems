/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let counter = s.length - 1;
    let lastChar = s[counter];
    while (lastChar === ' ') {
        counter--;
        lastChar = s[counter];
    }
    s = s.substring(0, counter + 1);
    console.log('s', s)
    let sLength = s.length - 1;
    let currChar = s[sLength];
    let length = 0;
    while (sLength !== -1 && currChar !== ' ') {
        length++;
        sLength--;
        currChar = s[sLength];
    }
    return length;
};
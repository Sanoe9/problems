// Given a string contaning only a, b and c, remove all b and ac.

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
    // your code here
    let stack = [];
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === 'b') {
            continue;
        }
        if (char === 'a') {
            stack.push(char);
        }
        if (char === 'c') {
            if (stack[stack.length - 1] === 'a') {
            stack.pop();
            } else {
            stack.push(char);
            }
        }
    }
    return stack.join('');
}
  
removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'
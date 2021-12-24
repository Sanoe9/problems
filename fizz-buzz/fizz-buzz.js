/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        const num = i;
        
        if (num === 1 || num === 2) {
            result.push(String(num));
        } else if (num % 3 === 0 && num % 5 === 0) {
            result.push('FizzBuzz');
            continue;
        } else if (num % 5 === 0) {
            result.push('Buzz');
        } else if (num % 3 === 0) {
            result.push('Fizz');
        } else {
            result.push(String(num));
        }
    }
    
    return result;
};
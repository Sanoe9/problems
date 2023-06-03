/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    // recursive case
    return fib(n - 1) + fib(n - 2);
};
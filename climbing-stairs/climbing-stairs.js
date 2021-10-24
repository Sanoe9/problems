/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // using a for loop
    let first = 1;
    let second = 1;
    let total = 1;
    for (let i = 2; i <= n; i++) {
        total = first + second;
        first = second;
        second = total;
    }
    return total
};
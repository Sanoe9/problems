/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // base cases
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
    
//     // recursive case
//     return fib(n - 1) + fib(n - 2);
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // base case
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }

//     return climbStairs(n - 1) + climbStairs(n - 2);
    
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp.push(dp[i - 1] + dp[i - 2]);
    }
    return dp[n];
};
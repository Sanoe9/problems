/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = Array.from({length: numRows}, e => Array(1).fill(0));
    console.log(dp);
    dp[0][0] = 1;
    if (numRows > 1) {
        dp[1][0] = 1;
        dp[1][1] = 1;
    }
    
    for (let i = 2; i < numRows; i++) {
        
        dp[i][0] = 1;
        console.log(i, dp[i]);
        for (let j = 1; j < dp[i - 1].length; j++) {
            const k = dp[i - 1];
            
            dp[i][j] = k[j - 1] + k[j];
            console.log('inner loop', dp[i]);
        }
        dp[i][dp[i].length] = 1;
    }
    return dp;
};
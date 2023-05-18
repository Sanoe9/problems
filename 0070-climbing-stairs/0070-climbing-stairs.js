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
    
    let arr = [];
    arr[0] = 1;
    arr[1] = 2;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1]
};
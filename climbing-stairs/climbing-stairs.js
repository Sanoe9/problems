/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // using dynamic programming
    let arr = [];
    arr[0] = 1;
    arr[1] = 2;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
};

// console.log(climbStairs(4));

var climbStairs2 = function(n) {
    // using recursion (very slow)
    // base cases
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }

    // recursive case
    return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs2(49));
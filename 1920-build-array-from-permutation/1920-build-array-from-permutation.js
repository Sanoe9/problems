<<<<<<< HEAD
/**
 * @param {number[]} nums
 * @return {number[]}
 */
=======
>>>>>>> d08e0e5 (Solve buildArray problem)
var buildArray = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }
    return ans;
};
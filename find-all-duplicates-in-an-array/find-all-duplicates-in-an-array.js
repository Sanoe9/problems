/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {};
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            obj[nums[i]]++;
            result.push(nums[i]);
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    return result;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        const element1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const element2 = nums[j];
            if (element1 + element2 === target) {
                result.push(i, j);
            }
        }
    }
    return result;
};
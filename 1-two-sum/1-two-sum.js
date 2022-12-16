/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result = [];
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (obj[target - number] !== undefined) {
      return [obj[target - number], i];
    }
    obj[number] = i;
  }
  return result;
};
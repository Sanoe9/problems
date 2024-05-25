/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum1 = (nums, target) => {
  let result = [];
  for (let i = 0; i <= nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              result.push(i, j);
              return result;
          }
      }
  }

  return result;
}

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
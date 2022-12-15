/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj [nums[i]] = 1;
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
};

var singleNumber1 = function(nums) {
    return nums.reduce((acc, cur) => {
        return acc ^ cur;
    }, 0);
};
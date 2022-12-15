/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!obj[num]) {
            obj[num] = 1
        } else {
            obj[num]++;
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
    return Object.values(obj)[0];
};
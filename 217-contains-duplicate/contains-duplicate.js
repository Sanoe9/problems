/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    for (let key in obj) {
        if (obj[key] > 1) {
            return true;
        }
    }
    return false;
};

var containsDuplicate1 = function(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (obj[num]) {
            return true;
        } else {
            obj[num] = 1;
        }
    }
    return false;
};
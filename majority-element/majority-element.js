/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    const halfLength = nums.length / 2;
    
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (obj[element] === undefined) {
            obj[element] = 1;
        } else {
            obj[element]++;
        }
    }
    
    for (let key in obj) {
        if (obj[key] > halfLength) {
            return key;
        }
    }
    
};
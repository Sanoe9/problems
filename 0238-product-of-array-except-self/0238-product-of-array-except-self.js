/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        const num = nums[i];
        for (let k = 0; k < i; k++) {
            product *= nums[k];
        }
        for (let j = i + 1; j < nums.length; j++) {
            product *= nums[j];
        }
        result.push(product);
    }
    
    return result;
};
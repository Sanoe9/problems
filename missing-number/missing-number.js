/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const range = [...Array(nums.length + 1).keys()];
    for (let i = 0; i < range.length; i++) {
        const element = range[i];
        if (!nums.includes(element)) {
            return element;
        }
    }
};
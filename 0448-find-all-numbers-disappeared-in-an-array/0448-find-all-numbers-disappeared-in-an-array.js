/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    const range = [...Array(nums.length + 1).keys()].slice(1);
    for (let i = 0; i < range.length; i++) {
        const element = range[i];
        if (!nums.includes(element)) {
            result.push(element);
        }
    }
    return result;
};
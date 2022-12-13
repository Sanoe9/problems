/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let range = [...Array(nums.length + 1).keys()];
    console.log('range', range);
    let result = [];
    for (let i = 1; i < range.length; i++) {
        let num = range[i];
        if (!nums.includes(num)) {
            result.push(num);
        }
    }
    return result;
};
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

var missingNumber1 = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let counter = 0;
    for (let i = 0; i <= sortedNums.length; i++) {
        let number = sortedNums[i];
        if (number !== counter) {
            return counter;
        }
        counter++;
    }
};
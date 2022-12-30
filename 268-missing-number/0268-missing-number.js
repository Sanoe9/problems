/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    console.log(sortedNums);
    let counter = 0;
    for (let i = 0; i <= sortedNums.length; i++) {
        let number = sortedNums[i];
        if (number !== counter) {
            return counter;
        }
        counter++;
    }
};
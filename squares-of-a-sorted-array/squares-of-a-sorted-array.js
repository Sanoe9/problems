/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // two pointers
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    
    let result = [];
    
    while (leftPointer <= rightPointer) {
        if (nums[leftPointer] ** 2 > nums[rightPointer] ** 2) {
            result.push(nums[leftPointer] ** 2);
            leftPointer++;
        } else {
            result.push(nums[rightPointer] ** 2);
            rightPointer--;
        }
    }
    
    return result.reverse();
};
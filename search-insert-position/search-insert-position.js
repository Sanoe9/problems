/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let midIndex = Math.floor((high + low) / 2);
        if (target > nums[midIndex]) {
            low = midIndex + 1;
        } else if (target < nums[midIndex]) {
            high = midIndex - 1;
        } else if (target === nums[midIndex]) {
            return midIndex;
        }
    }
    
    return low;
    
    
    
    // let high = nums.length - 1;
    // let low = 0;
    // while (low <= high) {
    //     let mid = Math.floor((high + low) / 2);
    //     if (nums[mid] == target) return mid;
    //     else if (nums[mid] > target) {
    //         high = mid - 1;
    //     } else {
    //         low = mid + 1;
    //     }
    // }
    // return low;

};
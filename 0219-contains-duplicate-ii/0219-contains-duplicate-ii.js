/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (obj[num] === undefined) {
            obj[num] = i;
        } else {
            if (Math.abs(obj[num] - i) <= k) {
                return true;
            } else {
                obj[num] = i;
            }
        }
    }
    return false;
};
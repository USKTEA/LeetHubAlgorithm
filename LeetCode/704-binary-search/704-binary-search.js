/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, l = 0, r = nums.length - 1) {
    const left = l;
    const right = r;
    const half = Math.floor((left + right) / 2);
    

    if (nums[half] === target) {
        return half;
    }
    
    if (left === right) {
        return -1;
    }


    if (nums[half] > target) {
        return search(nums, target, left, half - 1);
    }
    
    if (nums[half] < target) {
        return search(nums, target, half + 1, right);
    }
    
    return -1;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i);
        }
    }
    
    if (result.length === 0) {
        return [-1, -1];
    }
    
    if (result.length === 1) {
        return [result[0], result[0]];
    }
    
    const length = result.lenght - 1;
    return [result[0], result[result.length - 1]]
};
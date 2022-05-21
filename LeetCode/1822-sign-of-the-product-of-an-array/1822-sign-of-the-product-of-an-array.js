/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const sum = nums.reduce((total, curr) => total  * curr);
    
    if (sum > 0) {
        return 1;
    }
    
    if (sum < 0) {
        return -1;
    }
    
    return 0;
};
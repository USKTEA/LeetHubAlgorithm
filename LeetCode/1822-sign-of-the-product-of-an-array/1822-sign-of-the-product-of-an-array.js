/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    const sum = nums.reduce((total, curr) => {
        if (curr === 0) {
            return 0;
        }
        
        return total * curr;
    });
    
    if (sum > 0) {
        return 1;
    }
    
    if (sum < 0) {
        return -1;
    }
    
    return sum;
};
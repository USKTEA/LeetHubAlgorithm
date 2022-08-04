/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const sortedNums = nums.sort((a, b) => b - a);
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] < sortedNums[i + 1] + sortedNums[i + 2]) {
            return sortedNums[i] + sortedNums[i + 1] + sortedNums[i + 2];
        }
    }
    
    return 0;
};
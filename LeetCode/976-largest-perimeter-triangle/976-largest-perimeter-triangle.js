/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    const sortedNums = nums.slice().sort((a, b) => b - a);
    let longest = 0;
    let left = longest + 1;
    let right = left + 1;
    
    while (right < sortedNums.length) {
        if (sortedNums[longest] < sortedNums[left] + sortedNums[right]) {
            return sortedNums[longest] + sortedNums[left] + sortedNums[right];
        }
        
        left++;
        right = left + 1;
        
        if (right === sortedNums.length) {
            longest++;
            left = longest + 1;
            right = left + 1;
        }
    }
    
    return 0;
};
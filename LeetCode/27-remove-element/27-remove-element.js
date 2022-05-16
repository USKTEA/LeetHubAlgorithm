/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = 'k';
        }
    }
    
    nums.sort();
    
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 'k') {
            count++;
        }
    }
    
    while (count !== 0) {
        nums.pop();
        count--;
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let left = 0;
    let right = 1;
    let count = 0;

    while (right < nums.length) {
        if(nums[left] === nums[right]) {
            nums[right] = '';
            right++;
        }
        if(nums[left] !== nums[right]) {
            left = right;
            right++;
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== "") {
            count++;
        }
    }

    left = 0;
    right = 0;

    while (nums[right] !== undefined) {
        if(nums[left] !== "") {
            left++;
            right++;
        }
        if(nums[left] === "" ) {
            right++;
        }
        if(nums[right] !== "" && nums[right] !== undefined) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            right = left;
        };
    };

    return count;
    
};
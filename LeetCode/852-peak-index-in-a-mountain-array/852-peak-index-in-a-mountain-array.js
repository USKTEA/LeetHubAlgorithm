/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;

    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid + 1] > arr[mid]) {
            left = mid;
        } else if (arr[mid -1] > arr[mid]) {
            right = mid;
        } else {
            return mid;
        }
    }
};
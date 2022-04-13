/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a = String(x) ;
    let left = 0;
    let right = a.length -1;
    while(left < right) {
        if(a[left] !== a[right]) {
            return false;
        } 
        left++;
        right--;
    }
    return true;
};
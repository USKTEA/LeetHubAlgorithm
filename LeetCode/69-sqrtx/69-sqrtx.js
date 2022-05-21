/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let min = 0;
    let max = x;
    let mid = Math.trunc(min + max / 2);
    let temp = mid;
    
    if (x === 0) {
        return 0;
    }
    
    if (x <= 2) {
        return 1;
    }
    
    while (mid * mid > x) {
        mid = Math.trunc((min + mid) / 2);
        max = mid;
    }
    
    while (mid * mid <= x) {
        temp = mid;
        mid = mid + 1;
    }
    
    return temp;
};
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let min = 0;
    let max = x;
    
    
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        
        if (mid * mid > x) {
            max = mid - 1;
        }
        
        if (mid * mid < x) {
            min = mid + 1;
        }
        
        if (mid * mid === x) {
            max = mid;
            
            break;
        }
    }
    
    return max;
};
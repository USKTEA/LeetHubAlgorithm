/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let number = String(n).split('');
    let sum = 0;
    let result = 0; 
    
    while (true) {
        sum = number.reduce((a, b) => a + b * b, 0);
        
        if (sum === 1) {
            return true;
        }
        
        if (sum === 20) {
            return false;
        }
        
        return isHappy(sum);
    }
};
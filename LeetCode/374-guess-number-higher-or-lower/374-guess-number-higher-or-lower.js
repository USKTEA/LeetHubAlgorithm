/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let min = 0;
    let max = n;

    
    while (min <= max) {
        let half = Math.floor((min + max) / 2);
        let res = guess(half);
        
        if (res === 0) {
            return half;
        }
        
        if (res === -1) {
            max = half - 1;
        } else if (res === 1) {
            min = half + 1;
        }
    }
};
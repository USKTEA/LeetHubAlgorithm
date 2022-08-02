/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if (low % 2 !== 0) {
        low = low - 1;
    }
    
    return (high - low) / 2
};
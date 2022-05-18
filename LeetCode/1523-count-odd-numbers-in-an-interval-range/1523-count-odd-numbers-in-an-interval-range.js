/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0;
    
    if (low % 2 === 0 && high % 2 === 0) {
        count = (high - low) / 2;
        
        return count;
    }
    
    count = Math.floor((high - low) / 2) + 1;
    
    return count;
};

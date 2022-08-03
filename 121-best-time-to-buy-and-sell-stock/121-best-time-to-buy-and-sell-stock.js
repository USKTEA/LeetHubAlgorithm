/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let left = 0;
    let right = 1;
    
    while (right < prices.length) {
        const profit = prices[right] - prices[left];
        
        if (profit > max) {
            max = profit;
        }
        
        if (profit < 0) {
            left = right;
        }
        
        right += 1;
    }
    
    return max;
};
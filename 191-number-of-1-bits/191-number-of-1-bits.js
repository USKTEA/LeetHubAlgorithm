/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const binary = [...n.toString(2)].reduce((total, current) => total + Number(current), 0);
    
    return binary;
};
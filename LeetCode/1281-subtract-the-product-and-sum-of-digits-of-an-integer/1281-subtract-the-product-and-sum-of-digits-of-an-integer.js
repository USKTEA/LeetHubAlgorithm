/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numberArray = String(n).split('').map(element => +element);
    const multiply = numberArray.reduce((acc, curr) => curr * acc);
    const plus = numberArray.reduce((acc, curr) => curr + acc);
    
    return multiply - plus;
};
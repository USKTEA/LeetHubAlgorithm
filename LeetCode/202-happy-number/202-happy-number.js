/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let number = n;
    const set = new Set();
    let sum = 0;
    
    while (sum !== 1) {
        const newArray = [...number.toString()].map(e => +e);
        sum  = newArray.reduce((a, b) => a + b * b, 0);
        
        if (set.has(sum)) {
            return false;
        }
        
        if (sum === 1) {
            return true;
        }

        set.add(sum);
        number = sum;
    }
};
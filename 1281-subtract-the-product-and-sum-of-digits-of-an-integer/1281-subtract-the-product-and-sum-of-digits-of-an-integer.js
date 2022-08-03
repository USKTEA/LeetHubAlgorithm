/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const inputs = Array.from(String(n), Number);
    const answer = inputs.reduce((total, current, index) => {
        total[0] = total[0] * Number(current);
        total[1] = total[1] + Number(current);
        
        if (index === inputs.length -1) {
            return total[0] - total[1];
        }
        
        return total;
    }, [1, 0]);
    
    return answer;
};
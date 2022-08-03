/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const inputs = [...n.toString()];
    const answer = inputs.reduce((total, current, index) => {
        total[0] = total[0] * Number(current);
        total[1] = total[1] + Number(current);
        
        return total;
    }, [1, 0]);
    
    return answer[0] - answer[1];
};
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numberArray = String(n).split('').map(element => +element);
    let pod = 1;
    let sod = 0;
    
    numberArray.forEach(num => {
       pod = pod * num;
        sod = sod + num;
    });
    
    return pod - sod;
};
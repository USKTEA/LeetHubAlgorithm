/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let a = strs[0].split('');
    if(strs.length === 1) {
        return strs.join();
    }
    for(let i = 1; i < strs.length; i++) {
        for(let j = 0; j < a.length; j++) {
            if(a[j] === strs[i][j]) {
                continue;
            } if(a[j] !== strs[i][j]) {
                a.splice(j)
            }
        }
    }

    let c = "";
    for(let i = 0; i < a.length ; i++) {
        c = c + a[i]
    }
    return c
};
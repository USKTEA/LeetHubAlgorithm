/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const data = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!data[s[i]]) {
            data[s[i]] = t[i];
            
            continue;
        }
        
        if (data[s[i]] !== t[i]) {
            return false;
        }
    }
    
    const dataValue = Object.values(data);
    
    for (let i = 0; i < dataValue.length; i++) {
        if (dataValue.lastIndexOf(dataValue[i]) !== i) {
            return false;
        }
    }
    
    return true;
};
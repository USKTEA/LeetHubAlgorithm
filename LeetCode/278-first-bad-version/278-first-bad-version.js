/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    return function(n) {
        let min = 0;
        let max = n;
        
        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            
            if (isBadVersion(mid) === true) {
                max = mid - 1;
            } else {
                min = mid + 1;
            }
        }
        
        return min;
    };
};
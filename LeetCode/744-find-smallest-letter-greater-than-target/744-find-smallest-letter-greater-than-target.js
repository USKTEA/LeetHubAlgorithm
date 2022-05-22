/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let min = 0;
    let max = letters.length - 1;
    
    while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        
        if (letters[mid] > target) {
            max = mid -1;
        }
        
        if (letters[mid] <= target) {
            min = mid + 1;
        }
    }
    
    if (min === letters.length) {
        return letters[0];
    } else {
        return letters[min];
    }
};
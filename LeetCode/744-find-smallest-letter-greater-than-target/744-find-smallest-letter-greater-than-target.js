/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  const newSet = new Set();

  if (target >= letters[letters.length - 1]) {
    return letters[0];
  }

  for (let i = 0; i < letters.length; i++) {
    newSet.add(letters[i]);
  }

  for (const value of newSet) {
    if (value > target) {
      return value;
    }
  }
};
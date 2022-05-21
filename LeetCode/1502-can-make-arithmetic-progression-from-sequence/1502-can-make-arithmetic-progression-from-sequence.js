/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
  const inputArray = arr.sort((a, b) => a - b);
  const minus = inputArray[1] - inputArray[0];

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] + minus !== inputArray[i + 1]) {
      return false;
    }
  }

  return true;
};
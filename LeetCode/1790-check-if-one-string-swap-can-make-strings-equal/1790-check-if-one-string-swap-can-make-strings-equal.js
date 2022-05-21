/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  if (s1 === s2) {
    return true;
  }
    
  const swap = (arr, i, j) => {
    const swapped = arr.slice();
    [swapped[i], swapped[j]] = [swapped[j], swapped[i]];

    return swapped;
  };

  const array1 = s1.split("");
  const array2 = s2.split("");
  let index = 0;
  let count = 0;
  let change1 = -1;
  let change2 = -1;
    
    while (array1[index]) {
      if (array1[index] !== array2[index]) {
        count++;

      if (count > 2) {
        return false;
      }
      
      if (change1 !== -1 && change2 === -1) {
        change2 = index;
      }

      if (change1 === -1) {
        change1 = index;
      }
    }

    index++;
  }



  if (swap(array1, change1, change2).join() === array2.join()) {
    return true;
  }

  return false;
};
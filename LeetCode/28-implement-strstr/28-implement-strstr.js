/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const compare = haystack.split('');
  const test = needle.split('');
  const total = compare.concat(test);
  let left = 0;
  let right = haystack.length;
  let index = -1;
  let temp = 0;

  if (haystack.length < needle.length) {
    return index;
  }

  while (right < total.length && left < haystack.length) {
    if (total[left] === total[right]) {
      if (index === -1) {
        index = left;
        temp = left;
      }

      left++;
      right++;
    } else {
      temp = temp + 1;
      right = haystack.length;
      left = temp;
      index = -1;
    }
  }
    
    if (right === total.length) {
        return index;
    }

  return -1;
};
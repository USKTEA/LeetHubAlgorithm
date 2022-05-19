/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let half = Math.floor(num / 2);
  let prevHalf = 0;
  
  if (num < 2 || half * half === num) {
    return true;
  }
    
  while (half * half > num) {
    half = Math.floor(half / 2);

    if (half * half === num) {
      return true;
    }

    prevHalf = half * 2;
  }

  while (half < prevHalf) {
    if (half * half === num) {
      return true;
    }

    half++;
  }

  return false;
};
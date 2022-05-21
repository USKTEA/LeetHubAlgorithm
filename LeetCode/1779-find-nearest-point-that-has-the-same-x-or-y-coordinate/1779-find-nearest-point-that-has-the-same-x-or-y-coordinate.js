/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  const myLocation = [x, y];
  let index = 0;
  let distance = -1;
  let distanceIndex = -1;

  for (const value of points) {
    if (value[0] === myLocation[0] || value[1] === myLocation[1]) {
      const manhattanDisntance = Math.abs(myLocation[0] - value[0]) + Math.abs(myLocation[1] - value[1]);
      
      if (distance === -1) {
        distance = manhattanDisntance;
        distanceIndex = index;
      }

      if (distance > manhattanDisntance) {
        distance = manhattanDisntance;
        distanceIndex = index;
      }

      index++;
    } else {
      index++;
    }
  }

  return distanceIndex;
};
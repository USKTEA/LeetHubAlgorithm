/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  const myLocation = [x, y];
  let distance = [];
  let index = 0;
  let result;

  for (const value of points) {
    if (value[0] === myLocation[0] || value[1] === myLocation[1]) {
      const manhattanDisntance =
        Math.abs(myLocation[0] - value[0]) + Math.abs(myLocation[1] - value[1]);
      distance.push({ [index]: manhattanDisntance });
      index++;
    } else {
      index++;
    }
  }

  if (distance.length === 0) {
    return -1;
  }

  for (const value of distance) {
    for (const [distanceIndex, distance] of Object.entries(value)) {
      if (!result) {
        result = { distanceIndex, distance };
      }

      if (result.distance > distance) {
        result = { distanceIndex, distance };
      }
    }
  }

  return Number(result.distanceIndex);
};
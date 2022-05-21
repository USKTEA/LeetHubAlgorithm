/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let distance = [];
  let index = 0;
  let result;

  for (const value of points) {
    if (value[0] === x || value[1] === y) {
      const manhattanDisntance =
        Math.abs(x - value[0]) + Math.abs(y - value[1]);
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
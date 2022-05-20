/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  const inputArray = salary.slice();
  const excludeMinAndMax = inputArray.sort((a, b) => a - b);

  excludeMinAndMax.splice(0, 1);
  excludeMinAndMax.splice(-1, 1);
  console.log(excludeMinAndMax);

  return (
    excludeMinAndMax.reduce((total, current) => total + current, 0) /
    excludeMinAndMax.length
  );
};
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    const distances = points.map((point, index) => {
       if (point[0] === x || point[1] === y) {
           return [Math.abs(x - point[0]) + Math.abs(y - point[1]), index];
       }
        
        return false;
    }).filter((point) => {
        if (point !== false) {
            return point;
        }
    });
    
    if (!distances.length) {
        return -1;
    }
    
    const sorted = distances.sort((a, b) => a[0] - b[0]);
    
    return sorted[0][1];
};
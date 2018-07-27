const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  let result = (distancePoints + stylePoints + windFactor + gateFactor);
  //rounding function
  function Round(result, k) {
    var factor = Math.pow(10, k);
    return Math.round(result * factor) / factor;
  };
  return Round(result, 1);
}

module.exports = calculateTotalPoints;

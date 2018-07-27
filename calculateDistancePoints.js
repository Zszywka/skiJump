const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize === 'MAMUT') {
    distancePoint = 120;
    meterFactor = 1.2;
  }
  else if (hillSize === 'BIG') {
    distancePoint = 60;
    meterFactor = 1.8;
  }
  else {
    distancePoint = 60;
    meterFactor = 2;
  }
  return (distancePoint + (distance - kPoint) * meterFactor);
};

module.exports = calculateDistancePoints;

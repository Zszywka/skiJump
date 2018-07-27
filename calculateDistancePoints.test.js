const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  it('should return points', ()=> {
    const actual = calculateDistancePoints(212.0, 'MAMUT', 200);

    const expected = 134.4;

    assert.equal(actual, expected);
  });

  it('should return points', () => {
    const actual = calculateDistancePoints(99.5, 'NORMAL', 98)

    const expected = 63;

    assert.equal(actual, expected);
  });

  it('should return points', () => {
    const actual = calculateDistancePoints(106.0, 'NORMAL', 98)

    const expected = 76.0;

    assert.equal(actual, expected);
  });

  it('should return points', () => {
    const actual = calculateDistancePoints(208, 'MAMUT', 200)

    const expected = 129.6;

    assert.equal(actual, expected);
  });

  it('should return points', () => {
    const actual = calculateDistancePoints(133.0, 'BIG', 120)

    const expected = 83.4;

    assert.equal(actual, expected);
  });
});

const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateDistancePoints', () => {
  it('shoud return point', () => {
    const actual = calculateTotalPoints(134.0, 'BIG', 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, (-5.4));

    const expected = 137.3;

    assert.equal(actual, expected);
  });

  it('shoud return point', () => {
    const actual = calculateTotalPoints(124.0, 'BIG', 120, [17.5, 17.0, 17.5, 17.5, 17.5], 0, (-4.3));

    const expected = 115.4;

    assert.equal(actual, expected);
  });

});

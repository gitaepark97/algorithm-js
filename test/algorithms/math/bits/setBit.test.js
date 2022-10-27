'use strict';

const { setBit } = require('../../../../src/algorithms/math/bits/setBit');

describe('setBit', () => {
  it('should set bit at specific position', () => {
    expect(setBit(1, 0)).toBe(1);
    expect(setBit(1, 1)).toBe(3);
    expect(setBit(1, 2)).toBe(5);

    expect(setBit(10, 0)).toBe(11);
    expect(setBit(10, 1)).toBe(10);
    expect(setBit(10, 2)).toBe(14);
  });
});

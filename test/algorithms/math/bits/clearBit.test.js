'use strict';

const { clearBit } = require('../../../../src/algorithms/math/bits/clearBit');

describe('clearBit', () => {
  it('should clear bit at specific position', () => {
    expect(clearBit(1, 0)).toBe(0);
    expect(clearBit(1, 1)).toBe(1);
    expect(clearBit(1, 2)).toBe(1);

    expect(clearBit(10, 0)).toBe(10);
    expect(clearBit(10, 1)).toBe(8);
    expect(clearBit(10, 3)).toBe(2);
  });
});

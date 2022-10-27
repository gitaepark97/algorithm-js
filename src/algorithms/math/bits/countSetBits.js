'use strict';

/**
 * @param {number} originalNumber
 * @returns {number}
 */
function countSetBits(originalNumber) {
  let setBitsCount = 0;
  let number = originalNumber;

  while (number) {
    setBitsCount += number & 1;
    number >>>= 1;
  }

  return setBitsCount;
}

module.exports = { countSetBits };

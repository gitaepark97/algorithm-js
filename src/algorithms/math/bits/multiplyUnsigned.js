'use strict';

/**
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function multiplyUnsigned(number1, number2) {
  let result = 0;
  let multiplier = number2;
  let bitIndex = 0;

  while (multiplier !== 0) {
    if (multiplier & 1) {
      result += number1 << bitIndex;
    }

    bitIndex += 1;
    multiplier >>= 1;
  }

  return result;
}

module.exports = { multiplyUnsigned };

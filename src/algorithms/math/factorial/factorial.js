'use strict';

/**
 * @param {number} number
 * @returns {number}
 */
function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

module.exports = { factorial };

'use strict';

/**
 * @param {number} number
 * @returns {boolean}
 */
function isPositive(number) {
  if (number === 0) {
    return false;
  }

  return ((number >> 31) & 1) === 0;
}

module.exports = { isPositive };

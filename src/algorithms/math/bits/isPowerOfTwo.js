'use strict';

/**
 * @param {number} number
 * @returns {boolean}
 */
function isPowerOfTwo(number) {
  return (number & (number - 1)) === 0;
}

module.exports = { isPowerOfTwo };

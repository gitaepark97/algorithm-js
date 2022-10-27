'use strict';

/**
 * @param {number} number
 * @param {number} bitPosition
 * @returns {number}
 */
function setBit(number, bitPosition) {
  return number | (1 << bitPosition);
}

module.exports = { setBit };

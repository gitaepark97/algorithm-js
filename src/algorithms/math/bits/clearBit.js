'use strict';

/**
 * @param {number} number
 * @param {number} bitPosition
 * @returns {number}
 */

function clearBit(number, bitPosition) {
  const mask = ~(1 << bitPosition);

  return number & mask;
}

module.exports = { clearBit };

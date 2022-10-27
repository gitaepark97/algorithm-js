'use strict';

/**
 * @param {number} number
 * @param {number} bitPosition
 * @returns {number}
 */
function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}

module.exports = { getBit };

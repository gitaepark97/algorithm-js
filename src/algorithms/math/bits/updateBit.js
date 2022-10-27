'use strict';

/**
 * @param {number} number
 * @param {number} bitPosition
 * @param {number} bitValue
 * @returns {number}
 */
function updateBit(number, bitPosition, bitValue) {
  const bitValueNormalized = bitValue ? 1 : 0;

  const clearMask = ~(1 << bitPosition);

  return (number & clearMask) | (bitValueNormalized << bitPosition);
}

module.exports = { updateBit };

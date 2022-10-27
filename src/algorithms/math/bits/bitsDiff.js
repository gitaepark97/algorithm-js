'use strict';

const { countSetBits } = require('./countSetBits');

/**
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
function bitsDiff(number1, number2) {
  return countSetBits(number1 ^ number2);
}

module.exports = { bitsDiff };

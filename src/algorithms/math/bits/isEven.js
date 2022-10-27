'use strict';

/**
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
  return (number & 1) === 0;
}

module.exports = { isEven };

'use strict';

/**
 * @param {number} number
 * @returns {number}
 */
function switchSign(number) {
  return ~number + 1;
}

module.exports = { switchSign };

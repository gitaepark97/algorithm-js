'use strict';

/**
 * @param {number} number
 * @returns {number}
 */
function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

module.exports = { factorialRecursive };

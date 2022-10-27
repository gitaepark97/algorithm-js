'use strict';

const { divideByTwo } = require('./divideByTwo');
const { isEven } = require('./isEven');
const { isPositive } = require('./isPositive');
const { multiplyByTwo } = require('./multiplyByTwo');

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  if (b === 0 || a === 0) {
    return 0;
  }

  const mutiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  const mutiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
  const multiplyByOdd = () => (isPositive(b) ? mutiplyByOddPositive() : mutiplyByOddNegative());

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}

module.exports = { multiply };

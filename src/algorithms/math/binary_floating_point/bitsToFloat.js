'use strict';

/**
 * @typedef {number[]} Bits
 */

/**
 * @typedef {{
 *  signBitsCount: number,
 *  exponentBitsCount: number,
 *  fractionBitsCount: number,
 * }} PrecisionConfig
 */

/**
 * @typedef {{
 *  half: PrecisionConfig,
 *  single: PrecisionConfig,
 *  double: PrecisionConfig,
 * }} PrecisionConfigs
 */

/**
 * @type {PrecisionConfig}
 */
const precisionConfigs = {
  half: {
    signBitsCount: 1,
    exponentBitsCount: 5,
    fractionBitsCount: 10,
  },
  single: {
    signBitsCount: 1,
    exponentBitsCount: 8,
    fractionBitsCount: 23,
  },
  double: {
    signBitsCount: 1,
    exponentBitsCount: 11,
    fractionBitsCount: 52,
  },
};

/**
 * @param {Bits} bits
 * @param {PrecisionConfig} precisionConfig
 * @returns {number}
 */
function bitsToFloat(bits, precisionConfig) {
  const { signBitsCount, exponentBitsCount } = precisionConfig;

  const sign = (-1) ** bits[0];

  const exponentBias = 2 ** (exponentBitsCount - 1) - 1;
  const exponentBits = bits.slice(signBitsCount, signBitsCount + exponentBitsCount);
  const exponentUnbiased = exponentBits.reduce((exponentSoFar, currentBit, bitIndex) => {
    const bitPowerOfTwo = 2 ** (exponentBitsCount - bitIndex - 1);

    return exponentSoFar + currentBit * bitPowerOfTwo;
  }, 0);
  const exponent = exponentUnbiased - exponentBias;

  const fractionBits = bits.slice(signBitsCount + exponentBitsCount);
  const fraction = fractionBits.reduce((fractionSoFar, currentBit, bitIndex) => {
    const bitPowerOfTwo = 2 ** -(bitIndex + 1);

    return fractionSoFar + currentBit * bitPowerOfTwo;
  }, 0);

  return sign * 2 ** exponent * (1 + fraction);
}

/**
 * @param {Bits} bits
 * @returns {number}
 */
function bitsToFloat16(bits) {
  return bitsToFloat(bits, precisionConfigs.half);
}

/**
 * @param {Bits} bits
 * @returns {number}
 */
function bitsToFloat32(bits) {
  return bitsToFloat(bits, precisionConfigs.single);
}

/**
 * @param {Bits} bits
 * @returns {number}
 */
function bitsToFloat64(bits) {
  return bitsToFloat(bits, precisionConfigs.double);
}

module.exports = { bitsToFloat, bitsToFloat16, bitsToFloat32, bitsToFloat64 };

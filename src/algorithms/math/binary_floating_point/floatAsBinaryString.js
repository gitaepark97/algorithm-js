'use strict';

const singlePrecisionBytesLength = 4;
const doublePrecisionBytesLength = 8;
const bitsInByte = 8;

/**
 * @param {number} floatNumber
 * @param {number} byteLength
 * @returns {string}
 */
function floatAsBinaryString(floatNumber, byteLength) {
  let numberAsBinaryString = '';

  const arrayBuffer = new ArrayBuffer(byteLength);
  const dataView = new DataView(arrayBuffer);

  const byteOffset = 0;
  const littleEndian = false;

  if (byteLength === singlePrecisionBytesLength) {
    dataView.setFloat32(byteOffset, floatNumber, littleEndian);
  } else {
    dataView.setFloat64(byteOffset, floatNumber, littleEndian);
  }

  for (let byteIndex = 0; byteIndex < byteLength; byteIndex++) {
    let bits = dataView.getUint8(byteIndex).toString(2);
    if (bits.length < bitsInByte) {
      bits = new Array(bitsInByte - bits.length).fill('0').join('') + bits;
    }
    numberAsBinaryString += bits;
  }

  return numberAsBinaryString;
}

function floatAs32BinaryString(floatNumber) {
  return floatAsBinaryString(floatNumber, singlePrecisionBytesLength);
}

function floatAs64BinaryString(floatNumber) {
  return floatAsBinaryString(floatNumber, doublePrecisionBytesLength);
}

module.exports = { floatAs32BinaryString, floatAs64BinaryString };

'use strict';

const { Heap } = require('./Heap');

class MaxHeap extends Heap {
  /**
   * @param {any} firstElement
   * @param {any} secondElement
   * @returns {boolean}
   */
  pairIsCorrectOrder(firstElement, secondElement) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}

module.exports = { MaxHeap };

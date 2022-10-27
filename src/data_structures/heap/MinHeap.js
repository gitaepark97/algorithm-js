const { Heap } = require('./Heap');

class MinHeap extends Heap {
  /**
   * @param {any} firstElement
   * @param {any} secondElement
   * @returns {boolean}
   */
  pairIsCorrectOrder(firstElement, secondElement) {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}

module.exports = { MinHeap };

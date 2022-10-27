'use strict';

const { Comparator } = require('../../utils/Comparator');

class Heap {
  /**
   *
   * @param {function(any, any): number} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    if (new.target === Heap) {
      throw new TypeError('Cannot Construct Heap instance directly');
    }

    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {number} parentIndex
   * @returns {number}
   */
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  /**
   * @param {number} parentIndex
   * @returns {number}
   */
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  /**
   * @param {number} childIndex
   * @returns {number}
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * @param {number} childIndex
   * @returns {boolean}
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  /**
   * @param {number} parentIndex
   * @returns {boolean}
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * @param {number} parentIndex
   * @returns {boolean}
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * @param {number} parentIndex
   * @returns {any}
   */
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  /**
   * @param {number} parentIndex
   * @returns {any}
   */
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  /**
   * @param {number} childIndex
   * @returns {any}
   */
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  /**
   * @param {number} indexOne
   * @param {number} indexTwo
   */
  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];

    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  /**
   *
   * @returns {any}
   */
  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  /**
   * @returns {any}
   */
  poll() {
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  }

  /**
   * @param {any} item
   * @returns {Heap}
   */
  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();

    return this;
  }

  /**
   *
   * @param {any} item
   * @param {Comparator} comparator
   * @returns {Heap}
   */
  remove(item, comparator = this.compare) {
    const numberOfItemsToRemove = this.find(item, comparator).length;

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration++) {
      const indexToRemove = this.find(item, comparator).pop();

      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        const parentItem = this.parent(indexToRemove);

        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem || this.pairIsCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

    return this;
  }

  /**
   * @param {any} item
   * @param {Comparator} comparator
   * @returns {number[]}
   */
  find(item, comparator = this.compare) {
    const foundItenIndices = [];

    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex++) {
      if (comparator.equal(item, this.heapContainer[itemIndex])) {
        foundItenIndices.push(itemIndex);
      }
    }

    return foundItenIndices;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return !this.heapContainer.length;
  }

  /**
   * @returns {string}
   */
  toString() {
    return this.heapContainer.toString();
  }

  /**
   * @param {number} [customStartIndex]
   */
  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while (
      this.hasParent(currentIndex) &&
      !this.pairIsCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));

      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  /**
   * @param {number} customStartIndex
   */
  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairIsCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      if (this.pairIsCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  /**
   * @param {any} firstElement
   * @param {any} secondElement
   * @return {boolean}
   */
  pairIsCorrectOrder(firstElement, secondElement) {
    throw new Error(
      `You have to implement heap pair comparision method for ${firstElement} and ${secondElement} values.`,
    );
  }
}

module.exports = { Heap };

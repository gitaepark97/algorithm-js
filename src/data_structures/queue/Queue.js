'use strict';

const { LinkedList } = require('../linked_list/LinkedList');

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * @returns {any}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  /**
   * @param {any} value
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * @returns {any}
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();

    return removedHead ? removedHead.value : null;
  }

  /**
   * @param {function(any): string} [callback]
   * @returns {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

module.exports = { Queue };

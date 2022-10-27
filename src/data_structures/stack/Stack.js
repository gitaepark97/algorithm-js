'use strict';

const { LinkedList } = require('../linked_list/LinkedList');

class Stack {
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
  push(value) {
    this.linkedList.prepend(value);
  }

  /**
   * @returns {any}
   */
  pop() {
    const removedHead = this.linkedList.deleteHead();

    return removedHead ? removedHead.value : null;
  }

  /**
   * @returns {any[]}
   */
  toArray() {
    return this.linkedList.toArray().map(linkedListNode => linkedListNode.value);
  }

  /**
   *
   * @param {function(any): string} [callback]
   * @returns {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

module.exports = { Stack };

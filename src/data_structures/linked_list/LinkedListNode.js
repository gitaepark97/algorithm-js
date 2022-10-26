'use strict';

class LinkedListNode {
  /**
   * @param {any} value
   * @param {LinkedListNode} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @param {function(any): string} callback
   * @returns {string}
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

module.exports = { LinkedListNode };

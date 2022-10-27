'use strict';

class DoublyLinkedListNode {
  /**
   *
   * @param {any} value
   * @param {DoublyLinkedListNode} next
   * @param {DoublyLinkedListNode} previous
   */
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  /**
   *
   * @param {function(any): string} [callback]
   * @returns {string}
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

module.exports = { DoublyLinkedListNode };

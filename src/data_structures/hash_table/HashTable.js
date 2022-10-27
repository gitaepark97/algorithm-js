'use strict';

const { LinkedList } = require('../linked_list/LinkedList');

const defaultHashTableSize = 32;

class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  /**
   * @param {string} key
   * @returns {number}
   */
  hash(key) {
    const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0), 0);

    return hash % this.buckets.length;
  }

  /**
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    const keyHash = this.hash(key);

    this.keys[key] = keyHash;

    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  /**
   * @param {string} key
   * @returns {any}
   */
  delete(key) {
    const keyHash = this.hash(key);

    delete this.keys[key];

    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  /**
   * @param {string} key
   * @returns {any}
   */
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key });

    return node ? node.value.value : undefined;
  }

  /**
   *
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  /**
   * @returns {string[]}
   */
  getKeys() {
    return Object.keys(this.keys);
  }

  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.toArray().map(linkedListNode => linkedListNode.value.value);

      return values.concat(bucketValues);
    }, []);
  }
}

module.exports = { HashTable };

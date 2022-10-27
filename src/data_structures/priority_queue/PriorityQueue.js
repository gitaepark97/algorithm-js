const { Comparator } = require('../../utils/Comparator');
const { MinHeap } = require('../heap/MinHeap');

class PriorityQueue extends MinHeap {
  constructor() {
    super();

    this.priorities = new Map();
    this.compare = new Comparator(this.comparePriority.bind(this));
  }

  /**
   * @param {any} item
   * @param {number} [priority]
   * @returns {PriorityQueue}
   */
  add(item, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);

    return this;
  }

  /**
   * @param {any} item
   * @param {Comparator} customFindingComparator
   * @returns {PriorityQueue}
   */
  remove(item, customFindingComparator) {
    super.remove(item, customFindingComparator);
    this.priorities.delete(item);

    return this;
  }

  /**
   * @param {any} item
   * @param {number} priority
   * @returns {PriorityQueue}
   */
  changePriority(item, priority) {
    this.remove(item, new Comparator(this.compareValue));
    this.add(item, priority);

    return this;
  }

  /**
   * @param {any} item
   * @returns {number[]}
   */
  findByValue(item) {
    return this.find(item, new Comparator(this.compareValue));
  }

  /**
   * @param {any} item
   * @returns {boolean}
   */
  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  /**
   * @param {any} a
   * @param {any} b
   * @returns {number}
   */
  comparePriority(a, b) {
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }

    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
  }

  /**
   * @param {any} a
   * @param {any} b
   * @returns {number}
   */
  compareValue(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }
}

module.exports = { PriorityQueue };

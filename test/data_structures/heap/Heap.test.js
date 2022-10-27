const { Heap } = require('../../../src/data_structures/heap/Heap');

describe('Heap', () => {
  it('should not allow to create instance of the Heap directly', () => {
    const instantiateHeap = () => {
      const heap = new Heap();
      heap.add(5);
    };

    expect(instantiateHeap).toThrow();
  });
});

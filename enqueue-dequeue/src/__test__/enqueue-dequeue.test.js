'use strict';

const Queue = require('../enqueue-dequeue');

const myQueue = new Queue();
const myOtherQueue = new Queue();

describe('#enqueue-dequeue.js', () => {
  test('is popped value correct', () => {
    myQueue.enqueue(4);
    myQueue.enqueue(6);
    myQueue.enqueue(8);
    expect(myQueue.dequeue()).toEqual(4);
  });

  test('is stackA populating in the correct order', () => {
    myQueue.enqueue(4);
    myQueue.enqueue(6);
    myQueue.enqueue(8);
    expect(myQueue.stackA).toEqual({ _container: [4, 6, 8] });
  });

  test('is popped value still correct when running several enqueues and dequeues', () => {
    myOtherQueue.enqueue(4);
    myOtherQueue.enqueue(6);
    expect(myOtherQueue.dequeue()).toEqual(4);
    myOtherQueue.enqueue(8);
    myOtherQueue.enqueue(9);
    expect(myOtherQueue.dequeue()).toEqual(6);
    myOtherQueue.enqueue(3);
    expect(myOtherQueue.dequeue()).toEqual(8);
  });
});

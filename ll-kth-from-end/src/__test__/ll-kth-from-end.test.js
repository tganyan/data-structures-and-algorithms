'use strict';

const LinkedList = require('../linked-list');
const findNodePosition = require('../ll-kth-from-end');

const practiceList = new LinkedList();
const emptyList = new LinkedList();


for (let i = 0; i < 6; i++) {
  practiceList.insertAtHead(`${i}`);
}

describe('#ll-kth-from-end.js', () => {
  test('is k a number', () => {
    expect(() => findNodePosition('blue', practiceList)).toThrow();
  });

  test('Throw error if list is empty', () => {
    expect(() => findNodePosition(3, emptyList)).toThrow();
  });

  test('Throw error if k is bigger than list length', () => {
    expect(() => findNodePosition(9, practiceList)).toThrow();
  });
});

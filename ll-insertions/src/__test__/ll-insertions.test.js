'use strict';

const LinkedList = require('../ll-insertions');

const testList = new LinkedList();
const emptyList = new LinkedList();

for (let i = 0; i < 3; i++) {
  testList.insertAtHead(`value ${i}`);
}

testList.apppender(`new item`);

console.log(testList.head.next.next.next.value);

describe('#ll-insertions.js', () => {
  describe('Happy path', () => {
    test('Check if node is added to end', () => {
      testList.apppender(`new item`);
      expect(testList.head.next.next.next.value).toEqual('new item');
    });
  });

  describe('Sad path', () => {
    test('Throw error if list is empty', () => {
      expect(() => emptyList.apppender('some value')).toThrow();
    });
  });
});


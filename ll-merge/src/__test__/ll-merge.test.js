'use strict';

const LinkedList = require('../linked-list');
const listMerge = require('../ll-merge');

const listOne = new LinkedList();
const listTwo = new LinkedList();

const emptyList = new LinkedList();

for (let i = 0; i < 3; i++) {
  listOne.insertAtHead(`${i}`);
}

for (let i = 0; i < 2; i++) {
  listTwo.insertAtHead(`${i}`);
}

// let mergeFunc = listMerge.zippedList(listOne, listTwo);

// describe('#ll-merge.js', () => {

// test('is the list in the correct order for lists of even length', () => {
//   expect(() => {
//     mergeFunc.head.value;
//   }).toEqual(() => {
//     listMerge.zippedList(listSeven, listEight);
//   });
// });

//   test('is the list in the correct order', () => {
//     expect(() => {
//       console.log(mergeFunc.head);
//       console.log(mergeFunc.head.next);
//       console.log(mergeFunc.head.next.next);
//     })
//       .toEqual();
//   });
//
//   test('Throw error if list is empty', () => {
//     expect(() => listMerge.zippedList(listOne, emptyList)).toThrow();
//   });
// });

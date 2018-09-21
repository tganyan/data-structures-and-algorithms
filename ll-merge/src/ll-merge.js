'use strict';

const listMerge = module.exports = {};

const LinkedList = require('./linked-list');

const listOne = new LinkedList();
const listTwo = new LinkedList();

for (let i = 0; i < 6; i++) {
  listOne.insertAtHead(`${i}`);
}

for (let i = 0; i < 8; i++) {
  listTwo.insertAtHead(`${i}`);
}

listMerge.zippedList = (oneList, twoList) => {
  let listPrimary = oneList.head;
  let listSecondary = twoList.head;
  let helperA = listPrimary.next;
  let helperB = listSecondary.next;

  if (!listPrimary || !listSecondary) {
    throw new Error('One or both of the lists are empty');
  }

  while (listPrimary.next && listSecondary.next) {
    listPrimary.next = listSecondary;
    listPrimary = helperA;
    listSecondary.next = helperA;

    if (listPrimary.next) {
      helperA = listPrimary.next;
    }

    listSecondary = helperB;

    if (listSecondary.next) {
      helperB = listSecondary.next;
    }
  }
  return oneList;
};

// console.log(listMerge.zippedList(listOne, listTwo));

listMerge.zippedList(listOne, listTwo);

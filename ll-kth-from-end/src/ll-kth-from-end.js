'use strict';

const findPositionFromEnd = (k, list) => {
  if (isNaN(k)) {
    throw new Error(`${k} is not a number`);
  }

  if (!list.head) {
    throw new Error('The list is empty');
  }

  let currentNode = list.head;
  let length = 0;

  while (currentNode.next) {
    currentNode = currentNode.next;
    length += 1;
  }

  if (k > length) {
    throw new Error(`${k} is longer than the list`);
  }

  const nodeCount = length - k;
  currentNode = list.head;

  for (let i = 0; i < nodeCount; i++) {
    currentNode = currentNode.next;
  }
  return currentNode;
};


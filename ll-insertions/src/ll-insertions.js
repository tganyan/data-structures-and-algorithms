'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  apppender(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty!');
    }

    const node = new Node(value);
    let currentNode = this.head;

    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return currentNode.next;
  }
};







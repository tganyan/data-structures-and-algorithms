'use strict';

class Stack {
  constructor() {
    this._container = [];
  }

  push(value) {
    this._container.push(value);
  }

  pop() {
    return this._container.pop();
  }
}

module.exports = class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    this.stackA.push(value);
  }

  dequeue() {
    let poopedValue = this.stackB.pop();

    if (poopedValue) {
      return poopedValue;
    } 

    while (true) {
      poopedValue = this.stackA.pop();
      if (poopedValue) {
        this.stackB.push(poopedValue);
      } else {
        break;
      }
    }
    return this.stackB.pop();
  }
};

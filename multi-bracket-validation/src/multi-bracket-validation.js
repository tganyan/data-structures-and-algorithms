'use strict';

const multiBrackets = module.exports = {};

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

multiBrackets.validator = (string) => {
  let myStack = new Stack();
  let returnValue = false;
  let poppedVal = null;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '[' || string[i] === '{' || string[i] === '(') {
      myStack.push(string[i]);
      poppedVal = myStack.pop();
      switch (poppedVal) {
        case '{':
          if (string[(string.length - 1) - i] === '}') {
            returnValue = true;
          }
          break;
        case '(':
          if (string[(string.length - 1) - i] === ')') {
            returnValue = true;
          }
          break;
        case '[':
          if (string[(string.length - 1) - i] === ']') {
            returnValue = true;
          }
          break;
        default:
          returnValue = false;
      }
      console.log(poppedVal + 'pop');
      console.log(string[(string.length - 1) - i] + 'string');
    }
  }
  return returnValue;
}

const testOne = multiBrackets.validator('{[(text)]}');
// const testTwo = multiBrackets.validator('{[(text)]}}}}');
// const testThree = multiBrackets.validator('{[(text)))]}');

// multiBrackets.validator('{[(text)]}}}}');
// multiBrackets.validator('{[(text)]}');

console.log(testOne);
// console.log(testTwo);
// console.log(testThree);
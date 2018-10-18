'use strict';

const familyMatters = require('../who-is-the-father');

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(15);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const testTree = new BinaryTree(one);
const emptyTestTree = null;

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

describe('#who-is-the-father.js', () => {
  test('does it return true if child is actually child', () => {
    expect(familyMatters.whoIsTheFather(testTree, 1, 2)).toEqual(true);
  });
  test('does it return false if child is not child', () => {
    expect(familyMatters.whoIsTheFather(testTree, 3, 6)).toEqual(false);
  });
  test('does it return false if tree is empty', () => {
    expect(familyMatters.whoIsTheFather(emptyTestTree, 3, 6)).toEqual(false);
  });
});

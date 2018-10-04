'use strict';

const FizzBuzzTree = require('../fizzBuzzTree');

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

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;


describe('#fizzBuzzTree.js', () => {
  test('is node fizz if divisible by 3', () => {
    FizzBuzzTree.fizzBuzz(testTree);
    expect(testTree.root.right.value).toEqual('fizz');
  });

  test('is node fizz if divisible by 5', () => {
    FizzBuzzTree.fizzBuzz(testTree);
    expect(testTree.root.right.right.value).toEqual('buzz');
  });

  test('is node fizzbuzz if divisible by 3 and 5', () => {
    FizzBuzzTree.fizzBuzz(testTree);
    expect(testTree.root.right.left.value).toEqual('fizzbuzz');
  });
});

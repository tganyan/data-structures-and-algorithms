'use strict';

const fizzBuzzTree = module.exports = {};

fizzBuzzTree.inOrderTraversal = (root) => {
  if (!root) {
    return undefined;
  }

  fizzBuzzTree.inOrderTraversal(root.left);

  if (root.value % 3 === 0 && root.value % 5 !== 0) {
    root.value = 'fizz';
  } else if (root.value % 5 === 0 && root.value % 3 !== 0) {
    root.value = 'buzz';
  } else if (root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'fizzbuzz';
  }
  fizzBuzzTree.inOrderTraversal(root.right);
  return undefined;
}

fizzBuzzTree.fizzBuzz = (tree) => {
  fizzBuzzTree.inOrderTraversal(tree.root);
  return tree;
};

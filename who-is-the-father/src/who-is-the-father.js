'use strict';

const familyMatters = module.exports = {};

familyMatters.whoIsTheFather = (tree, parent, child) => {
  let parentNode = null;
  let father = false;

  if (tree === null) {
    return false;
  }

  (function findParent(root) {
    if (root === null) {
      return undefined;
    }

    if (root.value === parent) {
      parentNode = root;
    }
    findParent(root.left);
    findParent(root.right);
    return undefined;
  }(tree.root));

  (function findChild(root) {
    if (root === null) {
      return undefined;
    }

    if (root.value === child) {
      father = true;
    }

    findChild(root.left);
    findChild(root.right);
    return undefined;
  }(parentNode));

  return father;
};

'use strict';

const insertShift = module.exports = {};

insertShift.array = (arr, newItem) => {
  const newArr = [];

  if (!Array.isArray(arr)) {
    throw new Error('First input must be array');
  }

  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    newArr.push(arr[i]);
  }

  newArr.push(newItem);

  for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};

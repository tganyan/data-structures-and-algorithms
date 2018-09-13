'use strict';

const arrayShift = require('../array_shift');

const testArr = ['item1', 'item2', 'item3', 4, 'item5', 'item6', 'target', 8, 'item9', 'item10'];

describe('#shift.js', () => {
  test('is the new item being correctly stored in the array', () => {
    expect(arrayShift.array(testArr, 'george')).toEqual(['item1', 'item2', 'item3', 4, 'item5', 'george', 'item6', 'target', 8, 'item9', 'item10'])
  });

  test('Ensure first arg is an array', () => {
    expect(Array.isArray(testArr)).toBe(true);
  });
});

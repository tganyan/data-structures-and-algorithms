'use strict';

const multiBrackets = require('../multi-bracket-validation');

const testOne = multiBrackets.validator('{[(text)]}');
const testTwo = multiBrackets.validator('{[(text)]}}}}');
const testThree = multiBrackets.validator('');


describe('#multi-bracket-validation.js', () => {
  test('does it return true if brackets are correctly formatted', () => {
    expect(testOne).toEqual(true);
  });
  test('does it return false if brackets are not correctly formatted', () => {
    expect(testTwo).toEqual(false);
  });
  test('does it return false if string is empty', () => {
    expect(testThree).toEqual(false);
  });
});

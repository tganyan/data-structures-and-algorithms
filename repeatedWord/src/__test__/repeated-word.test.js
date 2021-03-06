'use strict';

const repeatedWord = require('../repeated-word');

const testString = 'A great day this has turned out to be. I\'m suicidal, me mate tries to kill me, me gun gets nicked and we\'re still in fookin\' Bruges!';
const emptyString = '';
const noRepeat = 'Ay ee eye oh you';

describe('#repeated-word.js', () => {
  test('is the correct word returned', () => {
    expect(repeatedWord.repeated(testString)).toEqual('to');
  });
  test('is it returning undefined if empty string', () => {
    expect(repeatedWord.repeated(emptyString)).toEqual(undefined);
  });
  test('does it return undefined is no repeated word', () => {
    expect(repeatedWord.repeated(noRepeat)).toEqual(undefined);
  });
});

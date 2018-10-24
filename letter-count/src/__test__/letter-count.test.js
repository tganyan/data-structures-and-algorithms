'use strict';

const letters = require('../letter-count');

describe('#letter-count.js', () => {
  test('does it return the correct count for each letter', () => {
    const output = letters.letterCount('good');
    expect(output.get('g')).toEqual(1);
    expect(output.get('o')).toEqual(2);
    expect(output.get('d')).toEqual(1);
  });
  test('does it return undefined if not a letter', () => {
    expect(letters.letterCount(4)).toEqual(undefined);
  });
  test('does it return the correct count for each letter with spaces', () => {
    const output = letters.letterCount('Hello World');
    expect(output.get('H')).toEqual(1);
    expect(output.get('e')).toEqual(1);
    expect(output.get('l')).toEqual(3);
    expect(output.get('o')).toEqual(2);
    expect(output.get(' ')).toEqual(1);
    expect(output.get('W')).toEqual(1);
    expect(output.get('r')).toEqual(1);
    expect(output.get('d')).toEqual(1);
  });
  test('does it return a separate count for uppercase and lowercase', () => {
    const output = letters.letterCount('baNanA');
    expect(output.get('b')).toEqual(1);
    expect(output.get('a')).toEqual(2);
    expect(output.get('N')).toEqual(1);
    expect(output.get('n')).toEqual(1);
    expect(output.get('A')).toEqual(1);
  });
});

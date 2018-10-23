'use strict';

const chess = require('../kill-the-pawn');

const boardOne = [
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['p'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['b'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']]];

const boardTwo = [
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['b'], ['p'], ['e']],
  [['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e'], ['e']]];

describe('#kill-the-pawn.js', () => {
  test('does it return true if child is actually child', () => {
    expect(chess.findTheBishop(boardOne)).toEqual(true);
  });
  test('does it return false if child is not child', () => {
    expect(chess.findTheBishop(boardTwo)).toEqual(false);
  });
});

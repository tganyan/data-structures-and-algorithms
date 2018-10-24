'use strict';

const letters = module.exports = {};

letters.letterCount = (string) => {
  const letterCounter = new Map();
  if (typeof string !== 'string') {
    return undefined;
  }

  for (let i = 0; i < string.length; i++) {
    if (letterCounter.has(string[i])) {
      letterCounter.set(string[i], letterCounter.get(string[i]) + 1);
    } else {
      letterCounter.set(string[i], 1);
    }
  }
  return letterCounter;
};

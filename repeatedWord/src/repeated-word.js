'use strict';

const wordWork = module.exports = {};

// const testString = 'Ken, I grew up in Dublin. I love Dublin. If i grew up on a farm, and was retarded, Bruges might impress me, but I didn\'t so it doesn\'t';

wordWork.repeated = (string) => {
  const stringLower = string.toLowerCase();
  const dividedString = stringLower.split(' ');
  const mappedString = new Map();
  let firstFound = false;

  dividedString.map((word) => {
    if (mappedString.has(word) && !firstFound) {
      firstFound = word;
    }
    mappedString.set(word);
    return word;
  });
  if (firstFound === false) {
    return undefined;
  }
  return firstFound;
};


// wordWork.repeated(testString);
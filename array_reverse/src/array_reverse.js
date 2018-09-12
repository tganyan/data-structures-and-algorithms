'use strict';

const array = module.exports = {};


array.reverseArray = (arr) => {
    let storedInput = arr.slice();
    arr = [];

    for (let i = 0; i < storedInput.length; i++) {
        arr.unshift(storedInput[i]);
    }

    return arr;
};

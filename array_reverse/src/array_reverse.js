'use strict';

const array = module.exports = {};

const testArr = ['item1', 'item2', 'item3', 4, 'item5', 'item6', 'target', 8, 'item9', 'item10'];


array.reverseArray = (arr) => {
    let storedInput = arr.slice();
    arr = [];

    for (let i = 0; i < storedInput.length; i++) {
        arr.unshift(storedInput[i]);
    }

    // console.log(arr);
    return arr;
};


array.reverseArray(testArr);
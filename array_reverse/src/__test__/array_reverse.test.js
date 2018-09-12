'use strict';

const arrayReve = require('../array_reverse');
// const reverse = arrayReve.reverseArray();
const testArr = ['item1', 'item2', 'item3', 4, 'item5', 'item6', 'target', 8, 'item9', 'item10'];

describe('#array_reverse.js', () => {
    test('is the first item in storedInput equal to the last item in returned array', () => {

        expect(arrayReve.reverseArray(testArr)).toEqual(['item10', 'item9', 8, 'target', 'item6', 'item5', 4, 'item3', 'item2', 'item1']);
    });

    test('Is function returning a value', () => {
        expect(arrayReve.reverseArray(testArr)).not.toEqual('' || undefined);
    });
});


// Test 1: Check to make sure the returned value is the reverse of the provided argument
// Test 2: Check to make sure the function is returning a value
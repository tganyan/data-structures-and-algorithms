'use strict';

const arrayReve = require('../array_reverse');
const reverse = arrayReve.reverseArray();

describe('#array_reverse.js', () => {
    test('is the first item in storedInput equal to the last item in returned array', () => {
        expect(reverse).toEqual(reverse.reverse());
    });

    test('Is function returning a value', () => {
        expect(reverse).not.toEqual('' || undefined);
    });
});


// Test 1: Check to make sure the returned value is the reverse of the provided argument
// Test 2: Check to make sure the function is returning a value
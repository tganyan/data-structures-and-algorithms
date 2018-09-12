'use strict';

const arrayReve = require('../array_reverse');

describe('#array_reverse.js', () => {
    test('is the first item in storedInput equal to the last item in returned array', () => {



        const aNumber = 5;
        expect(aNumber).toEqual(5);

        const fifty = 50;
        expect(fifty).toBeLessThan(100);
        expect(fifty).toBeGreaterThan(25);
    });

    test('Showcasing how to add another test', () => {
        const aTruthyValue = 'hi';
        expect(aTruthyValue).toBeTruthy();

        const aFalsyValue = 0;
        expect(aFalsyValue).toBeFalsy();
        expect(aFalsyValue).not.toBeTruthy();
    });
});


// Test 1:
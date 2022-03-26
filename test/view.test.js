import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('View', () => {

    test('should be a function', () => {
        expect(jmfcool.view).toBeInstanceOf(Function);
    }); 

    test('returns string', () => {
        jmfcool.view('src/item.view', function(view)
        {
            expect(view).toBe(view);
        });
    });

});
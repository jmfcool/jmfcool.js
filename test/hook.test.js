import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Hook', () => {

    test('should be a function', () => {
        expect(jmfcool.hook).toBeInstanceOf(Function);
    }); 

    test('should be undefined', () => {
        var hook = jmfcool.hook();
        expect(hook).toBeUndefined();
    });

});
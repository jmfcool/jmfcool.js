import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('GetFormatter', () => {

    test('should be a function', () => {
        expect(jmfcool.getFormatter).toBeInstanceOf(Function);
    }); 

    test('set function for formatter', () => {
        var getFormatter = jmfcool.getFormatter({ checks:'currency' });
        expect(getFormatter).toBeInstanceOf(Function);
    });

});
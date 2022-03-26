import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('GetFormatter', () => {

    test('should be a function', () => {
        expect(jmfcool.getFormatter).toBeInstanceOf(Function);
    }); 

    test('return formatter function', () => {
        var getFormatter = jmfcool.getFormatter({ checks:'currency' });
        expect(getFormatter).toBeInstanceOf(Function);
    });

});
import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Formatter', () => {

    test('should be a function', () => {
        expect(jmfcool.formatter).toBeInstanceOf(Function);
    }); 

    test('return formatter function', () => {
        var formatter = jmfcool.formatter({ checks:'currency' });
        expect(formatter).toBeInstanceOf(Function);
    });

});
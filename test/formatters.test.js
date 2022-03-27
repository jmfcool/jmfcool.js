import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Formatters', () => {

    test('should be an object', () => {

        expect(jmfcool.formatters).toBeInstanceOf(Object);
    
    });

    test('return this function', () => {
    
        const formatters = jmfcool.formatters;
    
        expect(formatters.this).toBeInstanceOf(Function);
    
    });

    test('return currency function', () => {
    
        const formatters = jmfcool.formatters;
    
        expect(formatters.currency).toBeInstanceOf(Function);
    
    });

});
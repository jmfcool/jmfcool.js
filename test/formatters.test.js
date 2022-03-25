import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Formatters', () => {

    test('jmfcool.formatters should be an object', () => {
        expect(jmfcool.formatters).toBeInstanceOf(Object);
    });

    test('jmfcool.formatters.this should be a function', () => {
        var formatters = jmfcool.formatters;
        expect(formatters.this).toBeInstanceOf(Function);
    });

    test('jmfcool.formatters.currency should be a function', () => {
        var formatters = jmfcool.formatters;
        expect(formatters.currency).toBeInstanceOf(Function);
    });

});
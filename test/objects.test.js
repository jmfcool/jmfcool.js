import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Objects', () => {

    test('jmfcool should be an object', () => {
        expect.objectContaining(jmfcool);
    });

    test('jmfcool.formatters should be an object', () => {
        expect.objectContaining(jmfcool.formatters);
    });

});
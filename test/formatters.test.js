import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Formatters', () => {

    test('should be an object', () => {
        expect(jmfcool.formatters).toBeInstanceOf(Object);
    });

});
import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Functions', () => {

    test('should be an object', () => {
        expect(jmfcool).toBeInstanceOf(Object);
    });

    test('jmfcool.init should be a function', () => {
        expect(jmfcool.init).toBeInstanceOf(Function);
    }); 

});
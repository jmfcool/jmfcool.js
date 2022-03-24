import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Functions', () => {

    test('jmfcool.hook should be a function', () => {
        expect(jmfcool.hook).toBeInstanceOf(Function);
    }); 

    test('jmfcool.init should be a function', () => {
        expect(jmfcool.init).toBeInstanceOf(Function);
    }); 

    test('jmfcool.display should be a function', () => {
        expect(jmfcool.display).toBeInstanceOf(Function);
    }); 

});
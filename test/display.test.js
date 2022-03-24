import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Display', () => {

    test('should be a function', () => {
        expect(jmfcool.display).toBeInstanceOf(Function);
    }); 
    
});
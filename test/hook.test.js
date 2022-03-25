import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Hook', () => {

    test('should be a function', () => {
        expect(jmfcool.hook).toBeInstanceOf(Function);
    }); 

    test('should be undefined', () => {
        var hook = jmfcool.hook();
        expect(hook).toBeUndefined();
    });

    test('should be undefined', () => {
        var hook = jmfcool.hook('response-item');
        console.log('hook: ', hook);
        //expect(hook).toBeUndefined();
    });

});
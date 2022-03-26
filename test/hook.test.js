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

    test('return correct result', () => {
        const hook = jest.spyOn(jmfcool, 'hook');
        hook('response-item');
        expect(hook.mock.calls[0][0]).toBe('response-item');
    });

});
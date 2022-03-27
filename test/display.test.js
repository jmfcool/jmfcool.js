import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Display', () => {

    test('should be a function', () => {
        expect(jmfcool.display).toBeInstanceOf(Function);
    }); 

    test('displays rendered view', () => {
        const spy = jest.spyOn(jmfcool, 'dis'); // we pass 'set'
        audio.volume = 100;
      
        expect(spy).toHaveBeenCalled();
        expect(audio.volume).toBe(100);
      
        spy.mockRestore();
      });
        
});
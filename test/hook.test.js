import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Hook', () => {

    test('should be a function', () => {
    
        expect(jmfcool.hook).toBeInstanceOf(Function);
    
    }); 

    test('should be undefined', () => {
        
        const hook = jmfcool.hook();
        
        expect(hook).toBeUndefined();
    
    });

    test('return html hook', () => {
        
        document.body.innerHTML = '<div class="response-item"></div>';

        const hook = jmfcool.hook('response-item');

        expect(hook).toBeInstanceOf(HTMLDivElement);
    
    });

});
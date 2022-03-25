import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Model', () => {

    test('should be a function', () => {
        expect(jmfcool.model).toBeInstanceOf(Function);
    }); 

    test('returns object', () => {
        jmfcool.model('model.json', function(model)
        {
            expect(model).toBeInstanceOf(Object);
        });
    }); 

    test('set model.item.name', () => {
        jmfcool.model('model.json', function(model)
        {
            expect(model.item.name).toBe('Oranges');
        });
    }); 

});
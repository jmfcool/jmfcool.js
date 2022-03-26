import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('GetObject', () => {

    test('should be a function', () => {
        expect(jmfcool.getObject).toBeInstanceOf(Function);
    }); 

    test('get rendered string tag from model', () => {
        jmfcool.model('src/model.json', function(model)
        {
            var getObject = jmfcool.getObject({ obj:'item.name', model:model });
            expect(getObject).toBe('Oranges');
        });
    });

    test('get rendered currency tag from model', () => {
        jmfcool.model('src/model.json', function(model)
        {
            var getObject = jmfcool.evaluator({ obj:'item.cost?currency', model:model });
            expect(getObject).toBe('18.50');
        });
    });

});
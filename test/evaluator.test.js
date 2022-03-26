import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Evaluator', () => {

    test('should be a function', () => {
        expect(jmfcool.evaluator).toBeInstanceOf(Function);
    }); 

    test('get rendered string tag from model', () => {
        jmfcool.model('src/model.json', function(model)
        {
            var evaluator = jmfcool.evaluator({ model:model, obj:'item.name', type:'tags' });
            expect(evaluator).toBe('Oranges');
        });
    });

    test('get rendered currency tag from model', () => {
        jmfcool.model('src/model.json', function(model)
        {
            var evaluator = jmfcool.evaluator({ model:model, obj:'item.cost?currency', type:'tags' });
            expect(evaluator).toBe('18.50');
        });
    });

});
import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Template', () => {

    test('should be a function', () => {
        expect(jmfcool.template).toBeInstanceOf(Function);
    }); 

    test('returns parsed template', () => {
        jmfcool.model('model.json', function(model)
        {
            jmfcool.view('item.view', function(view)
            {
                var template = jmfcool.template({ view:view, model:model });
                expect(template).toBe('<div class="item"><p>Your price for Oranges is $18.50!</p></div>');
            });
        });
    });

});
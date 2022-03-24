import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Render', () => {

    test('should be a function', () => {
        expect(jmfcool.render).toBeInstanceOf(Function);
    });

    test('returns rendered template', () => {
        jmfcool.model('model.json', function(model)
        {
            jmfcool.view('item.view', function(view)
            {
                var render = jmfcool.render({ view:view, model:model });
                expect(render).toBe('<div class="item"><p>Your price for Oranges is $18.50!</p></div>');
            });
        });
    });

});
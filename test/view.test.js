import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

const view = jest.fn(view => view);

jmfcool.view = (file, callback) => {

    const data = '<div class="item"><p>Your price for ${item.name} is $${item.cost?currency}!</p></div>';

    callback(data);

};

describe('View', () => {

    test('should be a function', () => {

        expect(jmfcool.view).toBeInstanceOf(Function);
    
    }); 

    test('return string', () => {
    
        jmfcool.view('item.view', view);
    
        expect(view.mock.results[0].value).toBe('<div class="item"><p>Your price for ${item.name} is $${item.cost?currency}!</p></div>');
    
    });

});
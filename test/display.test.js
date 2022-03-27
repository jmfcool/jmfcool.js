import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

const model = jest.fn(model => model);

jmfcool.model = (file, callback) => {

    const data = {
        "user" : 
        {
            "firstName" : "John",
            "lastName" : "Doe"
        },
        "item" : 
        {
            "cost" : 18.5000,
            "name" : "Oranges"
        }
    };

    callback(data);

};

const view = jest.fn(view => view);

jmfcool.view = (file, callback) => {

    const data = '<div class="item"><p>Your price for ${item.name} is $${item.cost?currency}!</p></div>';

    callback(data);

};

describe('Display', () => {

    test('should be a function', () => {

        expect(jmfcool.display).toBeInstanceOf(Function);
    
    }); 

    test('return rendered display', () => {
    
        jmfcool.model('model.json', model);
        jmfcool.view('item.view', view);

        document.body.innerHTML = '<div class="response-item"></div>';

        const display = jmfcool.display({ view:view.mock.results[0].value, model:model.mock.results[0].value, hook:'response-item' });
        
        expect(display).toBe('<div class="item"><p>Your price for Oranges is $18.50!</p></div>');
      
    });
        
});
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

    test('displays rendered view', () => {
        jmfcool.model('model.json', model);
        jmfcool.view('item.view', view);

        const spy = jest.spyOn(jmfcool, 'display');

        const hook = document.getElementsByClassName(name)[0];
        
        console.log('hook: ', hook);

        const display = jmfcool.display({ view:view.mock.results[0].value, model:model.mock.results[0].value, hook:'response-user' });
      
        console.log('display: ', display);

        //expect(spy).toHaveBeenCalled();
        //expect(audio.volume).toBe(100);
      
        spy.mockRestore();
      });
        
});
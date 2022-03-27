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

describe('Object', () => {

    test('should be a function', () => {

        expect(jmfcool.object).toBeInstanceOf(Function);
    
    }); 

    test('return rendered string', () => {
    
        jmfcool.model('model.json', model);
    
        const object = jmfcool.object({ value:'item.name', model:model.mock.results[0].value });
    
        expect(object).toBe('Oranges');
    
    });

});
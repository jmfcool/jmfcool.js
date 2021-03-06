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

describe('Evaluator', () => {

    test('should be a function', () => {

        expect(jmfcool.evaluator).toBeInstanceOf(Function);

    }); 

    test('return rendered string', () => {
        
        jmfcool.model('model.json', model);

        const evaluator = jmfcool.evaluator({ model:model.mock.results[0].value, value:'item.name', type:'tags' });
        
        expect(evaluator).toBe('Oranges');
    
    });

    test('return rendered currency', () => {
    
        jmfcool.model('model.json', model);
    
        const evaluator = jmfcool.evaluator({ model:model.mock.results[0].value, value:'item.cost?currency', type:'tags' });
    
        expect(evaluator).toBe('18.50');
    
    });

});
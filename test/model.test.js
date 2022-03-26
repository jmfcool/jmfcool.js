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

describe('Model', () => {

    test('should be a function', () => {
        expect(jmfcool.model).toBeInstanceOf(Function);
    }); 

    test('return object', () => {
        jmfcool.model('model.json', model);
        expect(model.mock.results[0].value).toBeInstanceOf(Object);
    }); 

    test('return model.item.name', () => {
        jmfcool.model('model.json', model);
        expect(model.mock.results[0].value.item.name).toBe('Oranges');
    });

});
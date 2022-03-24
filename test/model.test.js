import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

var model = jest.fn(model => model);

jmfcool.model = function(file, callback)
{

    var data = {
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
    }
    callback(data);  

};

describe('Model', () => {

    test('returns model', () => {
        jmfcool.model('model.json', model);
        expect(model.mock.calls[0][0]).toBeInstanceOf(Object);
    }); 

    test('set model.item.name', () => {
        jmfcool.model('model.json', model);
        expect(model.mock.lastCall[0].item.name).toBe('Oranges');
    }); 

});
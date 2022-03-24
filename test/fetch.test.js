import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';
import 'isomorphic-fetch';

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

describe('Fetch', () => {

    test('fetch model', async () => {
        const response = await fetch('https://jmfcool.github.io/jmfcool.js/test/model.json');
        const result = await response.json();
        console.info(result);
        //expect(result.name).toBe('Leanne Graham');  // Success!
    });

    test('fetch view', async () => {
        const response = await fetch('https://jmfcool.github.io/jmfcool.js/test/item.view');
        const result = await response.text();
        console.info(result);
        //expect(result.name).toBe('Leanne Graham');  // Success!
    });

});
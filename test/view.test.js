import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

var view = jest.fn(view => view);

jmfcool.view = function(file, callback)
{
    var data = '<div class="item"><p>Your price for ${item.name} is $${item.cost?currency}!</p></div>';
    callback(data);
};

describe('View', () => {

    test('returns string', () => {
        jmfcool.view('view.json', view);
        expect(view.mock.calls[0][0]).toBe(view.mock.calls[0][0]);
    });

});
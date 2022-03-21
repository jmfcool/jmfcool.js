import { jmfcool } from './jmfcool.js';

jmfcool.init()
{
    jmfcool.model('model.json', function(model)
    {
        jmfcool.view('user.view', function(view)
        {
            jmfcool.display({ view:view, model:model, hook:'response-user' });
        });
        jmfcool.view('item.view', function(view)
        {
            jmfcool.display({ view:view, model:model, hook:'response-item' });
        });
    });
};

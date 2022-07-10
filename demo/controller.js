import { jmfcool } from './jmfcool.min.js';

jmfcool.init()
{
    jmfcool.model('model.json', function(model)
    {
        jmfcool.view('user.view', function(view)
        {
            jmfcool.display({ view:view, model:model, hook:'user' });
        });
        jmfcool.view('item.view', function(view)
        {
            jmfcool.display({ view:view, model:model, hook:'item' });
        });
        jmfcool.view('message.view', function(view)
        {
            jmfcool.display({ view:view, model:model, hook:'message' });
        });
    });
};

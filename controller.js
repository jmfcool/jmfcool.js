import { jmfcool } from './jmfcool.js';

var controller = {
    model : function(file, callback)
    {
        fetch(file).then(response => response.json()).then(data => callback(data));
    },
    view : function(file, callback)
    {
        fetch(file).then(response => response.text()).then(data => callback(data));
    },
    init : function()
    {
        controller.model('model.json', function(model)
        {
            controller.view('user.view', function(view)
            {
                jmfcool.display({ view:view, model:model, hook:'response-user' });
            });
            controller.view('item.view', function(view)
            {
                jmfcool.display({ view:view, model:model, hook:'response-item' });
            });
        });
    }
};

window.addEventListener("load",controller.init,false);

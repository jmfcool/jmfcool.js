var jmfcool = jmfcool || {};

jmfcool.formatters = {
    this : (o) => { if (typeof o != 'string') o = (o).toString(); return o; },
    currency : (o) => { if (typeof o == 'number') o = (o).toFixed(2); return o; } 
};

jmfcool.init = () => {};

jmfcool.model = (file, callback) => {
    fetch(file).then(response => response.json()).then(data => callback(data)).catch(error => error);
};

jmfcool.view = (file, callback) => {
    fetch(file).then(response => response.text()).then(data => callback(data)).catch(error => error);
};

jmfcool.hook = (name) => {
    return document.getElementsByClassName(name)[0];
}; 

jmfcool.display = (args) => {
    var hook = args.hook,
        view = args.view,
        model = args.model,
        display, render;
    
    display = jmfcool.hook(hook);
    render = jmfcool.render({ view:view, model:model });
    display.innerHTML = render;
};

jmfcool.render = (args) => {
    var view = args.view,
        model = args.model;

    return jmfcool.template({ view:view, model:model });
};

jmfcool.template = (args) => {
    var view = args.view,
        model = args.model,
        tags, tag, value, tmp, filter;

    filter = /\$\{([^}]*)}/g;

    if(String(view).match(filter) === null) return view;

    tags = String(view).match(filter);

    filter = /\$\{([^}]*)}/;

    for(var i=0; i<tags.length; i++)
    {
        tag = tags[i].match(filter)[0];
        value = tags[i].match(filter)[1];
        tmp = jmfcool.evaluator({ model:model, value:value, type:'tags' });
        view = view.replace(tag,tmp);
    }
    
    return view;
};

jmfcool.evaluator = (args) => {
    var value = args.value,
        model = args.model,
        type = args.type,
        object;

    if(type === 'tags') object = jmfcool.object({ value:value, model:model });

    return object;
};

jmfcool.object = (args) => {
    var value = args.value,
        model = args.model,
        lookup;

    if(/\?/.test(value))
    {
        value = value.split('?');
        value = value[0];
    }

    lookup = value.split('.');

    for (var i=0; i<lookup.length; i++)
    {
        model = model[lookup[i]];

        if (model === undefined) return '';

        if(/\?/.test(args.value))
        {
            var checks, formatter;
                checks = args.value.split('?');

            formatter = jmfcool.formatter({ checks:checks[1] });
            model = formatter(model);
        }
    }
    
    return model;
};

jmfcool.formatter = (args) => {
    var checks = args.checks,
        obj = jmfcool.formatters,
        check = checks.split('.');

    for (var i=0; i<check.length; i++)
    {
        obj = obj[check[i]];
        if (obj === undefined) return null;
    }

    console.log('obj: ', obj);

    return obj;
};

window.addEventListener('load',jmfcool.init,false);

export { jmfcool };
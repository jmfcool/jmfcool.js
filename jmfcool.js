var jmfcool = jmfcool || {};

jmfcool = {
    formatters : 
    {
        this : function(o) { if (typeof o != 'string') o = (o).toString(); return o; },
        currency : function(o) { if (typeof o == 'number') o = (o).toFixed(2); return o; } 
    },
    hook : function(name)
    {
        return document.getElementsByClassName(name)[0];
    }
};

jmfcool.display = function(args)
{
    var hook = args.hook,
        view = args.view,
        model = args.model,
        display, render;
    
    display = jmfcool.hook(hook);
    render = jmfcool.render({ view:view, model:model });
    display.innerHTML = render;
};

jmfcool.render = function(args)
{
    var view = args.view,
        model = args.model;

    return jmfcool.view({ view:view, data:model });
};

jmfcool.view = function(args)
{
    var view = args.view,
        data = args.data,
        tags, tag, obj, tmp, filter;

    filter = /\$\{([^}]*)}/g;

    if(view.match(filter) === null) return view;

    tags = view.match(filter);

    filter = /\$\{([^}]*)}/;

    for(var i=0; i<tags.length; i++)
    {
        tag = tags[i].match(filter)[0];
        obj = tags[i].match(filter)[1];
        tmp = jmfcool.evaluator({ data:data, obj:obj, type:'tags' });
        view = view.replace(tag,tmp);
    }
    
    return view;
};

jmfcool.evaluator = function(args)
{
    var obj = args.obj,
        data = args.data,
        type = args.type,
        object;

    if(type === 'tags') object = jmfcool.getObject({ obj:obj, data:data });

    return object;
};

jmfcool.getObject = function(args)
{
    var obj = args.obj,
        data = args.data,
        lookup;

    if(/\?/.test(obj))
    {
        obj = obj.split('?');
        obj = obj[0];
    }

    lookup = obj.split('.');

    for (var i=0; i<lookup.length; i++)
    {

        data = data[lookup[i]];

        if (data === undefined) return '';

        if(/\?/.test(args.obj))
        {
            var checks, formatter;
                checks = args.obj.split('?');

            formatter = jmfcool.getFormatter({ checks:checks[1] });
            data = formatter(data);
        }
    }
    
    return data;
};

jmfcool.getFormatter = function(args)
{
    var checks = args.checks,
        obj = jmfcool.formatters,
        check = checks.split('.');

    for (var i=0; i<check.length; i++)
    {
        obj = obj[check[i]];
        if (obj === undefined) return null;
    }

    return obj;
};

export { jmfcool };
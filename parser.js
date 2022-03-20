var jmfcool = jmfcool || {};

jmfcool.parser = {
    formatters : 
    {
        this : function(o) { if (typeof o != 'string') o = (o).toString(); return o; },
        currency : function(o) { if (typeof o == 'number') o = (o).toFixed(2); return o; } 
    }   
};

jmfcool.parser.render = function(args)
{
    return jmfcool.parser.view({ view:args.view, data:args.model });
};

jmfcool.parser.view = function(args)
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
        tmp = jmfcool.parser.evaluator({ data:data, obj:obj, type:'tags' });
        view = view.replace(tag,tmp);
    }
    
    return view;
};

jmfcool.parser.evaluator = function(args)
{
    var obj = args.obj,
        data = args.data,
        type = args.type,
        object;

    if(type === 'tags') object = jmfcool.parser.getObject({ obj:obj, data:data });

    return object;
};

jmfcool.parser.getObject = function(args)
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

            formatter = jmfcool.parser.getFormatter({ checks:checks[1] });
            data = formatter(data);
        }
    }
    
    return data;
};

jmfcool.parser.getFormatter = function(args)
{
    var checks = args.checks,
        obj = jmfcool.parser.formatters,
        check = checks.split('.');

    for (var i=0; i<check.length; i++)
    {
        obj = obj[check[i]];
        if (obj === undefined) return null;
    }

    return obj;
};

export { jmfcool };
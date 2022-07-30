var rubric = Object();

rubric.flatten = function (html, components, data={}) {
    var soup = jQuery(`<div>${html}</div>`);
    var container = soup[0];

    while (true) {
        var changed = false;

        for (let node of soup.find("*")) {
            var node_name = node.nodeName.toLowerCase();
            var node_contents = node.innerHTML;
            var _node_attrs = node.attributes;

            var node_attrs = {};

            for (node_attr of _node_attrs) {
                node_attrs[node_attr.name] = node_attr.value;
            }

             if (! (node_name in components)) {
                 var render_data =
                 {
                     'attrs': {},
                     'contents': '',
                     'data': {},
                     'app': data,
                 };

                 var rendered = rubric.render(node.outerHTML, render_data);

                 var parsed_tag = rendered;

                 if (node.outerHTML == parsed_tag) {
                     continue;
                 }
             }
             else {
                 var comp = components[node_name];

                 var fed = rubric.feed(comp, attrs=node_attrs, contents=node_contents);
                 var parsed_tag = fed['local'];
             }

             var fed_soup = jQuery(parsed_tag);

             fed_soup.insertBefore(node, null);

             node.remove();

             var changed = true;

             break;
         }

         if (! changed) {
             break;
         }
    }

    return container.innerHTML;
};

rubric.render = function (template, data={}) {
    var rendered = nunjucks.renderString(template, data);

    return rendered;
};

rubric.component = function (name, local=null, global=null, dependencies=null) {
    var comp =
    {
        'name': name,
        'local': local,
        'global': global,
        'dependencies': dependencies,
    };

    return comp;
};

rubric.feed = function (comp, attrs={}, contents='', data={}, app={}) {
    var new_attrs = {};

    for (key in attrs) {
        if (key.startsWith('@')) {
            data[key.substr(1)] = attrs[key];
        }
        else {
            new_attrs[key] = attrs[key];
        }
    }

    attrs = new_attrs;

    attrs.items = function() {
        var safe_attrs = [];

        for (key in this) {
            if (key == 'items') {
                continue;
            }

            var pair = [key, this[key]];

            safe_attrs.push(pair);
        }

        return safe_attrs;
    }

    var name = comp['name'];
    var local = comp['local'];
    var global = comp['global'];
    var dependencies = comp['dependencies'];

    var render_data =
    {
        'attrs': attrs,
        'contents': contents,
        'data': data,
        'app': app,
    };

    var fed =
    {
        'name': name,
        'local': local ? rubric.render(local, render_data) : local,
        'global': global ? rubric.render(global, render_data) : global,
        'dependencies': dependencies,
    };

    return fed;
};

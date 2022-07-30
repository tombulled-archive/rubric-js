// Config
let prefix = 'b-';
let contexts =
[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'white'
];
let sides =
[
    'top',
    'bottom',
    'left',
    'right'
];
let sizes_min =
[
    'sm',
    'lg'
];
let sizes_full =
[
    'sm',
    'md',
    'lg',
    'xl'
];
let displays = ['none', 'inline', 'inline-block', 'block', 'table', 'table-cell', 'table-row', 'flex', 'inline-flex'];
let alignments = ['start', 'end', 'center', 'baseline', 'stretch'];
let utility_classes =
[
    // Border
    // Border > Additive
    'border',
    ...sides.map((val) => `border-${val}`),
    // 'border-top',
    // 'border-right',
    // 'border-bottom',
    // 'border-left',
    // Border > Subtractive
    ...['border', ...sides.map((val) => `border-${val}`)].map((val) => `${val}-0`),
    // 'border-0',
    // 'border-top-0',
    // 'border-right-0',
    // 'border-bottom-0',
    // 'border-left-0',
    // Border > Colour
    ...contexts.map((val) => `border-${val}`),
    // 'border-primary',
    // 'border-secondary',
    // 'border-success',
    // 'border-danger',
    // 'border-warning',
    // 'border-info',
    // 'border-light',
    // 'border-dark',
    // 'border-white',
    // Border > Radius
    'rounded',
    ...['circle', 'pill', ...sides].map((val) => `rounded-${val}`),
    // 'rounded-top',
    // 'rounded-right',
    // 'rounded-bottom',
    // 'rounded-left',
    // 'rounded-circle',
    // 'rounded-pill',
    'rounded-0',
    // Border > Sizes
    ...sizes_min.map((val) => `rounded-${val}`),
    // 'rounded-sm',
    // 'rounded-lg',

    // Clearfix
    'clearfix',

    // Close Icon
    'close',

    // Colours
    // Colours > Colour
    ...['body', 'muted', 'black-50', 'white-50', ...contexts].map((val) => `text-${val}`),
    // 'text-primary',
    // 'text-secondary',
    // 'text-success',
    // 'text-danger',
    // 'text-warning',
    // 'text-info',
    // 'text-light',
    // 'text-dark',
    // 'text-white',
    // 'text-body',
    // 'text-muted',
    // 'text-black-50',
    // 'text-white-50',
    // Colours > Background Colours
    ...['transparent', ...contexts].map((val) => `bg-${val}`),
    // 'bg-primary',
    // 'bg-secondary',
    // 'bg-success',
    // 'bg-danger',
    // 'bg-warning',
    // 'bg-info',
    // 'bg-light',
    // 'bg-dark',
    // 'bg-white',
    // 'bg-transparent',
    // Colours > Background Gradient
    ...contexts.map((val) => `bg-gradient-${val}`),
    // 'bg-gradient-primary',
    // 'bg-gradient-secondary',
    // 'bg-gradient-success',
    // 'bg-gradient-danger',
    // 'bg-gradient-warning',
    // 'bg-gradient-info',
    // 'bg-gradient-light',
    // 'bg-gradient-dark',

    // Display
    ...displays.map((val) => `d-${val}`),
    // 'd-none',
    // 'd-inline',
    // 'd-inline-block',
    // 'd-block',
    // 'd-table',
    // 'd-table-cell',
    // 'd-table-row',
    // 'd-flex',
    // 'd-inline-flex',
    ...[].concat.apply([], sizes_full.map((val) => displays.map((sub_val) => `d-${val}-${sub_val}`))),

    // Display > Print
    ...displays.map((val) => `d-print-${val}`),

    // Embed
    // 'embed-responsive',
    // 'embed-responsive-16by9',
    // 'embed-responsive-item',

    // Flex
    // 'flex-row',
    // 'flex-row-reverse',
    // 'flex-column',
    // 'flex-column-reverse',
    // ...[].map((val) => [val, `${val}-reverse`),
    ...['row', 'column'].map((val) => `flex-${val}`),
    ...['row', 'column'].map((val) => `flex-${val}-reverse`),
    ...[].concat.apply([], sizes_full.map((val) => ['row', 'column'].map((sub_val) => `flex-${val}-${sub_val}`))),
    ...[].concat.apply([], sizes_full.map((val) => ['row', 'column'].map((sub_val) => `flex-${val}-${sub_val}-reverse`))),

    // Justify Content
    ...['start', 'end', 'center', 'between', 'around'].map((val) => `justify-content-${val}`),
    ...[].concat.apply([], sizes_full.map((val) => ['start', 'end', 'center', 'between', 'around'].map((sub_val) => `justify-content-${val}-${sub_val}`))),

    // Align Items
    ...alignments.map((val) => `align-items-${val}`),
    ...[].concat.apply([], sizes_full.map((val) => alignments.map((sub_val) => `align-items-${val}-${sub_val}`))),

    // Align Self
    ...alignments.map((val) => `align-self-${val}`),
    ...[].concat.apply([], sizes_full.map((val) => alignments.map((sub_val) => `align-self-${val}-${sub_val}`))),

    // Fill
    'flex-fill',
    ...sizes_full.map((val) => `flex-${val}-fill`),

    // Grow and Shrink
    ...[].concat.apply([], ['grow', 'shrink'].map((val) => [0, 1].map((sub_val) => `flex-${val}-${sub_val}`))),
    ...[].concat.apply([], sizes_full.map((size) => [].concat.apply([], ['grow', 'shrink'].map((action) => [0, 1].map((val) => `flex-${size}-${action}-${val}`))))),

    // Auto Margins
    // 'mr-auto',
    // 'ml-auto',
    // 'mb-auto',
    // 'mt-auto',
    ...['l', 'r', 't', 'b'].map((val) => `m${val}-auto`),

    // Wrap
    // 'flex-nowrap',
    // 'flex-wrap',
    // 'flex-wrap-reverse',
    ...['nowrap', 'wrap', 'wrap-reverse'].map((val) => `flex-${val}`),
    ...[].concat.apply([], sizes_full.map((val) => ['nowrap', 'wrap', 'wrap-reverse'].map((sub_val) => `flex-${val}-${sub_val}`))),

    // Order
    ...range(12 + 1).map((val) => `order-${val}`),
    ...[].concat.apply([], sizes_full.map((val) => range(12 + 1).map((sub_val) => `order-${val}-${sub_val}`))),

    // Align Content
    ...['start', 'end', 'center', 'around', 'stretch'].map((val) => `align-content-${val}`),
    ...[].concat.apply([], sizes_full.map((val) => ['start', 'end', 'center', 'around', 'stretch'].map((sub_val) => `align-content-${val}-${sub_val}`))),

    // Float
    ...['left', 'right', 'none'].map((val) => `float-${val}`),
    ...[].concat.apply([], sizes_full.map((val) => ['left', 'right', 'none'].map((sub_val) => `float-${val}-${sub_val}`))),

    // Image Replacement
    'text-hide',

    // Overflow
    ...['auto', 'hidden'].map((val) => `overflow-${val}`),

    // Position
    ...['static', 'relative', 'absolute', 'fixed', 'sticky'].map((val) => `position-${val}`),

    // Position > Fixed
    ...['top', 'bottom'].map((val) => `fixed-${val}`),

    // Position > Sticky
    'sticky-top',

    // Screen Readers
    ...['only', 'only-focusable'].map((val) => `sr-${val}`),

    // Shadows
    ...['-none', '-sm', '', '-lg'].map((val) => `shadow${val}`),

    // Sizing
    // ...[25, 50, 75, 'auto'].map((val) => `w-${val}`),
    // ...[25, 50, 75, 'auto'].map((val) => `h-${val}`),
    ...combinations_map((vals) => `${vals[0]}-${vals[1]}`, ['h', 'w'], [25, 50, 75, 'auto']),

    ...['w', 'h'].map((val) => `m${val}-100`),

    // Sizing > Relative to Viewport
    ...combinations_map((vals) => `${vals[0]}v${vals[1]}-100`, ['', 'min-'], ['h', 'w']),

    // Spacing
    ...combinations_map((_) => `${_[0]}${_[1]}${_[2]}-${_[3]}`, ['m', 'p'], ['t', 'b', 'l', 'r', 'x', 'y', ''], ['', ...['sm', 'md', 'lg', 'xl'].map((val) => `-${val}`)], [...range(5 + 1), 'auto']),

    // Horizontal Centering
    'mx-auto',

    // Negative Margin
    ...combinations_map((_) => `m${_[0]}${_[1]}-n${_[2]}`, ['t', 'b', 'l', 'r', 'x', 'y', ''], ['', ...['sm', 'md', 'lg', 'xl'].map((val) => `-${val}`)], range(1, 5 + 1)),

    // Stretched Link
    'stretched-link',

    // Text
    // Text > Alignment
    ...combinations_map((_) => `text${_[0]}-${_[1]}`, ['', ...map((val) => `-${val}`, sizes_full)], ['left', 'right', 'center']),

    // Text > Wrapping & Overflow
    ...map((val) => `text-${val}`, ['wrap', 'nowrap', 'truncate']),

    // Text > Word Break
    'text-break',

    // Text > Transform
    ...map((val) => `text-${val}`, ['lowercase', 'uppercase', 'capitalize']),

    // Text > Font Weight & Italics
    'font-italic',
    ...map(val => `font-weight-${val}`, ['bold', 'bolder', 'normal', 'light', 'lighter']),

    // Text > Monospace
    'text-monospace',

    // Text > Reset Colour
    'text-reset',

    // Text > Decoration
    'text-decoration-none',

    // Vertical Alignment
    ...map(val => `align-${val}`, ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom']),

    // Visibility
    'visible',
    'invisible',

    // Content > Typography > Headings
    ...map(val => `h${val}`, range(1, 6 + 1)),

    // Content > Typography > Displays
    ...map(val => `display-${val}`, range(1, 4 + 1)),

    // Content > Typography > Lead
    'lead',

    // Content > Typography > Inline Text Elements
    'mark',
    'small',

    // Content > Typography > Abbreviations
    'initialism',

    // Content > Typography > Blockquotes
    'blockquote',

    // Content > Typography > Naming a Source
    'blockquote-footer',

    // Content > Typography > List > Unstyled
    'list-unstyled',

    // Content > Typography > List > Inline
    'list-inline',
    'list-inline-item',

    // Content > Code > Blocks
    'pre-scollable',

    // Content > Images
    'img-fluid',
    'img-thumbnail',

    // Content > Figures
    'figure',
    'figure-img',
    'figure-caption'
];

// console.dir(utility_classes);

// Functions
function true_local_name(local_name)
{
    return local_name.substring(prefix.length);
}

class BaseBootstrapElement extends BaseElement
{
    render()
    {
        for (let component_key in components)
        {
            let component_class = components[component_key];

            if (! this.hasAttribute(component_key))
            {
                continue;
            }

            this.removeAttribute(component_key);

            let component = document.createElement(prefix + component_key);

            copy_attributes(this, component);
            component.innerHTML = this.innerHTML;

            return component;
        }
    }
}

class BaseBootstrapAlertElement extends BaseBootstrapElement
{
    render()
    {
        let element = document.createElement('div');
        let identifier = 'alert';

        let custom_attribute_keys =
        [
            ...contexts,
            'dismissible',
            'fade',
            'show',
        ];
        let custom_attributes_map =
        {
            'fade': 'fade',
            'show': 'show',
            ...[...contexts, 'dismissible'].reduce((map, key) => (map[key] = `${identifier}-${key}`, map), {}),
        };

        map_attributes
        (
            this,
            custom_attribute_keys,
            function (self, key, val)
            {
                let cls = custom_attributes_map[key];

                self.removeAttribute(key);
                self.classList.add(cls);
            }
        );

        copy_attributes(this, element);

        element.classList.add(identifier);

        element.setAttribute('role', identifier);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapAlertLinkElement extends BaseBootstrapElement
{
    render()
    {
        let element = document.createElement('a');

        copy_attributes(this, element);

        element.classList.add(true_local_name(this.localName));

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapAlertHeadingElement extends BaseBootstrapElement
{
    render()
    {
        let element = document.createElement('h4');

        copy_attributes(this, element);

        element.classList.add(true_local_name(this.localName));

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapBadgeElement extends BaseBootstrapElement
{
    render()
    {
        var element_type = 'span';
        let identifier = 'badge';

        let custom_attribute_keys =
        [
            ...contexts,
            'pill',
            'link',
        ];
        let custom_attributes_map = [...contexts, 'pill'].reduce((map, key) => (map[key] = `${identifier}-${key}`, map), {});
        let custom_attribute_behaviours =
        {
            'link': () => element_type = 'a',
        };

        let custom_attributes = map_attributes
        (
            this,
            custom_attribute_keys,
            function (self, key, val)
            {
                if (key in custom_attributes_map)
                {
                    let cls = custom_attributes_map[key];

                    self.classList.add(cls);
                }

                if (key in custom_attribute_behaviours)
                {
                    let func = custom_attribute_behaviours[key];

                    func();
                }

                self.removeAttribute(key);
            }
        );

        let element = document.createElement(element_type);

        copy_attributes(this, element);

        element.classList.add(identifier);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapBreadcrumbElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'breadcrumb';
        let elem_nav = document.createElement('nav');
        let elem_ol = document.createElement('ol');

        copy_attributes(this, elem_nav);

        elem_nav.classList.add(identifier);
        elem_ol.classList.add(identifier);

        elem_ol.innerHTML = this.innerHTML;

        elem_nav.appendChild(elem_ol);

        return elem_nav;
    }
}

class BaseBootstrapBreadcrumbItemElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'breadcrumb-item';
        let element = document.createElement('li');

        let custom_attribute_keys =
        [
            'active',
        ];
        let custom_attributes_map =
        {
            'active': function(self, key, val)
            {
                self.classList.add(key);
                self.setAttribute('aria-current', 'page');
            },
        };

        let custom_attributes = map_attributes
        (
            this,
            custom_attribute_keys,
            function (self, key, val)
            {
                if (key in custom_attributes_map)
                {
                    let func = custom_attributes_map[key];

                    func(self, key, val);
                }

                self.removeAttribute(key);
            }
        );

        copy_attributes(this, element);

        element.classList.add(identifier);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapButtonElement extends BaseBootstrapElement
{
    render()
    {
        let type = 'button';
        let identifier = 'btn';

        let custom_attributes_map =
        {
            'anchor': function(self, key, val)
            {
                type = 'a';
            },
            'input': function(self, key, val)
            {
                type = 'input';
            },
            'label': function(self, key, val)
            {
                type = 'label';
            },
            'nowrap': function(self, key, val)
            {
                self.classList.add('text-nowrap');
            },
            'submit': function(self, key, val)
            {
                self.setAttribute('type', 'submit');
            },
            'reset': function(self, key, val)
            {
                self.setAttribute('type', 'reset');
            },
            'small': function(self, key, val)
            {
                self.classList.add(`${identifier}-sm`);
            },
            'large': function(self, key, val)
            {
                self.classList.add(`${identifier}-lg`);
            },
            'block': function(self, key, val)
            {
                self.classList.add(`${identifier}-block`);
            },
            'active': function(self, key, val)
            {
                self.classList.add('active');
                self.setAttribute('aria-pressed', 'true');
            },
            'focus': function(self, key, val)
            {
                self.classList.add('focus');
            },
            'disabled': function(self, key, val)
            {
                self.classList.add('disabled');
                self.setAttribute('aria-disabled', 'true');
                self.setAttribute('tabindex', '-1');
            },
            'toggle': function(self, key, val)
            {
                self.setAttribute('data-toggle', 'button');
                if (! self.hasAttribute('aria-pressed'))
                {
                    self.setAttribute('aria-pressed', 'false');
                }
            },
            'expanded': function(self, key, val)
            {
                self.setAttribute('aria-expanded', 'false');
            },
            'dropdown': function(self, key, val)
            {
                self.setAttribute('data-toggle', 'dropdown');
                self.setAttribute('aria-haspopup', 'true');
                if (! self.hasAttribute('aria-expanded'))
                {
                    self.setAttribute('aria-expanded', 'false');
                }
            },
            ...
            [
                ...contexts,
                ...contexts.map((context) => `outline-${context}`),
                'link'
            ].reduce
            (
                (map, key) =>
                (
                    map[key] = function(self, key, val)
                    {
                        self.classList.add(`${identifier}-${key}`);
                    },
                    map
                ),
                {}
            ),
        };
        let custom_attributes_keep =
        [
            'disabled',
        ];

        let custom_attributes = map_attributes
        (
            this,
            Object.keys(custom_attributes_map),
            function (self, key, val)
            {
                let func = custom_attributes_map[key];

                if (func)
                {
                    func(self, key, val);
                }

                if (! custom_attributes_keep.includes(key))
                {
                    self.removeAttribute(key);
                }
            }
        );

        var element = document.createElement(type);

        element.setAttribute('role', 'button');
        element.setAttribute('type', 'button');


        /*
        switch (type)
        {
            case 'button':
                var element = document.createElement('button');

                break;
            case 'anchor':
                var element = document.createElement('a');

                element.setAttribute('role', 'button');

                break;
            case 'input':
                var element = document.createElement('input');

                element.setAttribute('type', 'button');

                break;
            case 'label':
                var element = document.createElement('label');

                element.setAttribute('type', 'button');

                break;
        }
        */

        this.classList.add(identifier);

        copy_attributes(this, element);

        // element.classList.add(identifier);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

// Create Button Group next ! (Remember toggle state.)
class BaseBootstrapButtonGroupElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'btn-group';
        let include_base_class = true;

        let custom_attributes_map =
        {
            'toggle': function(self, key, val)
            {
                self.classList.add('btn-group-toggle');
                self.setAttribute('data-toggle', 'buttons');
            },
            'group': function(self, key, val)
            {
                self.setAttribute('role', 'group');
            },
            'toolbar': function(self, key, val)
            {
                self.setAttribute('role', 'toolbar');
            },
            'label': function(self, key, val)
            {
                self.setAttribute('aria-label', val);
            },
            'labelled-by': function(self, key, val)
            {
                self.setAttribute('aria-labelledby', val);
            },
            'small': function(self, key, val)
            {
                self.classList.add(`${identifier}-sm`);
            },
            'large': function(self, key, val)
            {
                self.classList.add(`${identifier}-lg`);
            },
            'vertical': function(self, key, val)
            {
                self.classList.add(`${identifier}-vertical`);

                include_base_class = false;
            },
        };

        let custom_attributes = map_attributes
        (
            this,
            Object.keys(custom_attributes_map),
            function (self, key, val)
            {
                let func = custom_attributes_map[key];

                if (func)
                {
                    func(self, key, val);
                }

                self.removeAttribute(key);
            }
        );

        var element = document.createElement('div');

        if (include_base_class)
        {
            this.classList.add(identifier);
        }

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapCardElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'card';

        let custom_attributes_map =
        {
            'center-text': function(self, key, val) // There are more 'text align' classes
            {
                self.classList.add('text-center');
            },
        };

        let element = document.createElement('div');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapCardImageTopElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'card-img-top';

        let element = document.createElement('img');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapCardBodyElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'card-body';

        let element = document.createElement('div');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapCardTitleElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'card-title';

        let element = document.createElement('h5');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapCardTextElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'card-text';

        let element = document.createElement('p');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapCardSubtitleElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'card-subtitle';

        let element = document.createElement('h6');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapEmbedElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'embed-responsive';
        let ratios =
        [
            [21, 9],
            [16, 9],
            [4, 3],
            [1, 1]
        ];
        let ratio_map = ratios.reduce((map, ratio) => (map[`ratio-${ratio[0]}-${ratio[1]}`] = `${ratio[0]}by${ratio[1]}`, map), {});

        let custom_attributes = map_attributes
        (
            this,
            Object.keys(ratio_map),
            function (self, key, val)
            {
                let map_key = ratio_map[key];

                self.classList.add(`${identifier}-${map_key}`);

                self.removeAttribute(key);
            }
        );

        let element = document.createElement('div');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapEmbedItemElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'embed-responsive-item';
        let element_types =
        [
            'iframe',
            'embed',
            'video',
            'object'
        ];
        let element_type = 'iframe';

        let custom_attributes = map_attributes
        (
            this,
            element_types,
            function (self, key, val)
            {
                element_type = key;

                self.removeAttribute(key);
            }
        );

        let element = document.createElement(element_type);

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class BaseBootstrapTableElement extends BaseBootstrapElement
{
    render()
    {
        let identifier = 'table';
        let element_attributes =
        {
            'dark': (self, key, val) => self.classList.add(`table-${key}`),
            'striped': (self, key, val) => self.classList.add(`table-${key}`),
            'bordered': (self, key, val) => self.classList.add(`table-${key}`),
            'borderless': (self, key, val) => self.classList.add(`table-${key}`),
            'hover': (self, key, val) => self.classList.add(`table-${key}`),
            'sm': (self, key, val) => self.classList.add(`table-${key}`),
            'responsive-sm': (self, key, val) => self.classList.add(`table-${key}`),
            'responsive-md': (self, key, val) => self.classList.add(`table-${key}`),
            'responsive-lg': (self, key, val) => self.classList.add(`table-${key}`),
            'responsive-xl': (self, key, val) => self.classList.add(`table-${key}`),
            'caption': function (self, key, val)
            {
                var caption = document.createElement('caption');

                caption.innerHTML = val;

                if (self.children)
                {
                    self.insertBefore(caption, self.children[0]);
                }
                else
                {
                    self.appendChild(caption);
                }
            },
        }

        let custom_attributes = map_attributes
        (
            this,
            keys(element_attributes),
            function (self, key, val)
            {
                let func = element_attributes[key];

                func(self, key, val);

                self.removeAttribute(key);
            }
        );

        let element = document.createElement('table');

        this.classList.add(identifier);

        copy_attributes(this, element);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

let components =
{
    // Base
    '': BaseBootstrapElement,

    // Alerts
    'alert': BaseBootstrapAlertElement,

    // Alert Link
    'alert-link': BaseBootstrapAlertLinkElement,

    // Alert Additional Content
    'alert-heading': BaseBootstrapAlertHeadingElement,

    // Badges
    'badge': BaseBootstrapBadgeElement,

    // Breadcrumbs
    'breadcrumb': BaseBootstrapBreadcrumbElement,

    // Breadcrumb Items
    'breadcrumb-item': BaseBootstrapBreadcrumbItemElement,

    // Buttons
    'button': BaseBootstrapButtonElement,

    // Button Group
    'button-group': BaseBootstrapButtonGroupElement,

    // Cards
    'card': BaseBootstrapCardElement,

    // Card Image Top
    'card-image-top': BaseBootstrapCardImageTopElement,

    // Card Body
    'card-body': BaseBootstrapCardBodyElement,

    // Card Title
    'card-title': BaseBootstrapCardTitleElement,

    // Card Text
    'card-text': BaseBootstrapCardTextElement,

    // Card Subtitle
    'card-subtitle': BaseBootstrapCardSubtitleElement,

    // Embed
    'embed': BaseBootstrapEmbedElement,

    // Embed Item
    'embed-item': BaseBootstrapEmbedItemElement,

    // Table
    'table': BaseBootstrapTableElement,
};

for (let element_name in components)
{
    let element_class = components[element_name];
    let breakout_element_class = breakout(element_class);

    let wrapped_element_class = wrap_element(breakout_element_class);

    wrapped_element_class.define(`${prefix}${element_name}`);
}

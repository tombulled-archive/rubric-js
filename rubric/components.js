// Requires: jQuery?

// Functions
let print = console.log;

// https://github.com/w3c/webcomponents/issues/551
/*const HTMLParsedElement = (() => {
  const DCL = 'DOMContentLoaded';
  const init = new WeakMap;
  const isParsed = el => {
    do {
      if (el.nextSibling)
        return true;
    } while (el = el.parentNode);
    return false;
  };
  const cleanUp = (el, observer, ownerDocument, onDCL) => {
    observer.disconnect();
    ownerDocument.removeEventListener(DCL, onDCL);
    init.set(el, true);
    parsedCallback(el);
  };
  const parsedCallback = el => el.parsedCallback();
  return class HTMLParsedElement extends HTMLElement {
    connectedCallback() {
      if ('parsedCallback' in this && !init.has(this)) {
        const self = this;
        const {ownerDocument} = self;
        init.set(self, false);
        if (ownerDocument.readyState === 'complete' || isParsed(self))
          Promise.resolve(self).then(parsedCallback);
        else {
          const onDCL = () => cleanUp(self, observer, ownerDocument, onDCL);
          ownerDocument.addEventListener(DCL, onDCL);
          const observer = new MutationObserver(changes => {
            if (isParsed(self)) {
              cleanUp(self, observer, ownerDocument, onDCL);
              return true;
            }
          });
          observer.observe(self.parentNode, {childList: true, subtree: true});
        }
      }
    }
    get parsed() {
      return init.get(this) === true;
    }
  };
})();*/

class BaseMutationObserver
{
    constructor(element, callback, config={ attributes: true, childList: true, subtree: true })
    {
        this.config = config;
        //this.elements = {};
        this.element = element;
        this.element_callback = callback;
        this.observer = new MutationObserver((...args) => this.callback(...args));
        this.connected = true;

        this.observe();
    }

    // observe(element, callback)
    observe()
    {
        // console.log(element);
        // console.log('is observing:');
        // console.log(callback);

        // this.elements[element] = callback;

        this.observer.observe(this.element, this.config);

        this.connected = true;
    }

    callback(mutations_list, observer)
    {
        // Use traditional 'for loops' for IE 11
        // console.log(self);
        console.log(this);
        console.log(mutations_list);
        // console.log(observer);

        // console.log('elements:');
        // console.log(this.elements);
        // console.log(this);
        // console.log('vs');
        // console.log(self);

        for (let mutation of mutations_list)
        {
            // if (mutation.type === 'childList') {
            //     // console.log('A child node has been added or removed.');
            // }
            // else if (mutation.type === 'attributes') {
            //     // console.log('The ' + mutation.attributeName + ' attribute was modified.');
            // }
            // console.log(this);
            // console.log(self);

            var target = mutation['target'];
            //var callback = this.elements[target];

            console.log('mutation:');
            console.log('observer belongs to:');
            console.log(this.element);
            console.log('target:');
            console.log(target);
            console.log('me:');
            console.log(this.element);
            console.log(target == this.element);
            console.log();

            if (target != this.element)
            {
                continue;
            }

            var in_elements = false;

            for (let element in this.elements)
            {
                console.log('element:');
                console.log(element);
            }

            // console.log(this);
            // console.log(target);
            // console.log(callback);
            // console.log();

            // console.log('mutation:');
            // console.log(target);
            // console.log(mutation);
            // // console.log(callback);
            // console.log();

            this.element_callback(mutation);

            // break;
        }
    }

    disconnect()
    {
        this.observer.disconnect();

        this.connected = false;
    }
}

// config
//const mutation_observer_config = { attributes: true, childList: true, subtree: true };
//const mutation_observer = new BaseMutationObserver(mutation_observer_config);
// const mutation_observer_config = { attributes: true, childList: true, subtree: true };
// const mutation_observer_callback = function(mutationsList, observer) {
//     // Use traditional 'for loops' for IE 11
//     for(let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };

// Create an observer instance linked to the callback function
// const mutation_observer_observer = new MutationObserver(mutation_observer_callback);

// Start observing the target node for configured mutations
// mutation_observer_observer.observe(, mutation_observer_config);

// Later, you can stop observing
// mutation_observer_observer.disconnect();

class AbstractHTMLElement extends HTMLElement
{
    constructor()
    {
        super();

        // Check to see if observedAttributes are defined and has length
        if (this.constructor.observedAttributes && this.constructor.observedAttributes.length)
        {
            // Loop through the observed attributes
            this.constructor.observedAttributes.forEach
            (
                attribute =>
                {
                    // Dynamically define the property getter/setter
                    Object.defineProperty
                    (
                        this,
                        attribute,
                        {
                            get()
                            {
                                return this.getAttribute(attribute);
                            },
                            set(attrValue)
                            {
                                if (attrValue)
                                {
                                    this.setAttribute(attribute, attrValue);
                                }
                                else
                                {
                                    this.removeAttribute(attribute);
                                }
                            }
                        }
                    )
                }
            );
        }
    }
}

function gen(cls, observed_attributes=[])
{
    cls.observedAttributes = observed_attributes;

    return cls;
}

class BaseElement extends AbstractHTMLElement
{
    constructor()
    {
        super();

        self._initialised = false;

        this.shadow = this.attachShadow({mode: 'open'});
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        if (! this._initialised)
        {
            return;
        }

        this.update();
    }

    connectedCallback()
    {
        this.shadow.innerHTML = this.innerHTML;
        this.innerHTML = '';

        this.init();

        this._initialised = true;
    }

    _attributes()
    {
        let attributes = {};

        for (let attr of this.attributes)
        {
            attributes[attr.name] = attr.value;
        }

        return attributes;
    }

    init()
    {
        this.update();
    }

    update()
    {
        return;
    }
}

/*
class YtmFoo extends BaseElement
{
    update()
    {
        let greeting = this.getAttribute('greeting');
        let name = this.getAttribute('name');

        this.shadow.querySelector('slot[name=greeting]').innerHTML = greeting;
        this.shadow.querySelector('slot[name=name]').innerHTML = name;

        let a = document.createElement('a');

        a.innerHTML = `Click Me ${name}!`;
        $(a).click(this.some_method); // Must be wrapped with jQuery

        console.log($(a)[0]);

        this.shadow.querySelector('slot[name=func]').innerHTML = '';
        this.shadow.querySelector('slot[name=func]').appendChild(a);
    }

    some_method()
    {
        console.log('Yay, i got called!');
    }
}

// Declare custom_elements
custom_elements =
[
    {
        'name': 'ytm-foo',
        'class': YtmFoo,
        'attributes':
        [
            'name',
            'greeting'
            // 'func'
        ]
    }
];

// Define all custom elements
for (let element_index in custom_elements)
{
    let element = custom_elements[element_index];

    customElements.define(element['name'], gen(element['class'], element['attributes']));
}
*/

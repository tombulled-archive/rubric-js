function breakout(component)
{
    let breakout_component = class extends component
    {
        render()
        {
            let elements = super.render();

            if (! elements)
            {
                return;
            }

            if (! Array.isArray(elements))
            {
                elements = [elements];
            }

            for (let element of elements)
            {
                this.parentElement.insertBefore(element, this);
            }

            this.parentElement.removeChild(this);
        }
    };

    return breakout_component;
}

function copy_attributes(src_element, dst_element)
{
    let attributes = src_element.attributes;

    for (let attribute of attributes)
    {
        let key = attribute.name;
        let val = attribute.value;

        dst_element.setAttribute(key, val);
    }
}

function map_attributes(component, keys, func)
{
    let attributes = {};

    for (let key of keys)
    {
        if (! component.hasAttribute(key))
        {
            continue;
        }

        let val = component.getAttribute(key);

        attributes[key] = val;

        func(component, key, val);
    }

    return attributes;
}

function wrap_element(element)
{
    let wrapped = class extends element {};

    return wrapped;
}

function range(min, max=null)
{
    if (max == null)
    {
        max = min;
        min = 0;
    }

    array = Array.from(new Array(max), (x,i) => i + min);

    return array;
}

function combinations_map(callback, ...arrays)
{
    // console.log(arrays, callback);
    let combinations = cartesian(...arrays);
    let flattened = combinations.map(callback);

    // console.log(combinations);
    // console.log(flattened);

    return flattened;
}

function flatten(...arrays)
{
    return [].concat.apply([], arrays);
}

// https://stackoverflow.com/questions/4331092/finding-all-combinations-cartesian-product-of-javascript-array-values
// Generate cartesian product of given iterables:
function* _cartesian(head, ...tail) {
  let remainder = tail.length ? _cartesian(...tail) : [[]];
  for (let r of remainder) for (let h of head) yield [h, ...r];
}

function cartesian(...args)
{
    return [..._cartesian(...args)];
}

function map(func, array)
{
    return array.map(func);
}

function keys(object)
{
    return Object.keys(object);
}

// console.log(combinations_map((vals) => `${vals[0]}-${vals[1]}`, [1,2], [3,4]))

/*
class BaseHTMLElement extends HyperHTMLElement
{

}
*/

class BaseElement extends HyperHTMLElement // BaseHTMLElement
{
    /*render()
    {

    }*/
}

/*
class Foo extends BaseElement
{
    render()
    {
        return this.html`<p>Hello!</p>`
    }
}

class Bar extends BaseElement
{
    render()
    {
        let container = document.createElement('div');

        return container;
    }
}

Bar = breakout(Bar);

Bar.define('x-bar');
Foo.define('x-foo');
*/

/*
Bar = breakout(BaseElement);
Foo = BaseElement;

Bar.define('x-bar');
Foo.define('x-foo');
*/

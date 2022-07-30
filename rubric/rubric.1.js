function breakout(component)
{
    /*cls.prototype.render = function()
    {
        let elements = super.render();

        if (! Array.isArray(elements))
        {
            elements = [elements];
        }

        for (let element of elements)
        {
            console.log(element);
        }
    };*/

    let breakout_component = class extends component
    {
        render()
        {
            let elements = super.render();

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

class BaseHTMLElement extends HyperHTMLElement
{

}


class BaseElement extends BaseHTMLElement
{
    render()
    {

    }
}


class _BaseBreakoutElement extends BaseElement
{
    /*created()
    {
        // this.render = () => console.log('nope...');
    }*/

    // created()
    // {
    //     // console.log('base breakout created');
    // }

    constructor(...args)
    {
        super(...args);

        console.log('base breakout constructed');

        // console.log('this:');
        // console.log(this);
        // console.log('super:');
        // console.log(super);

        this.render = super.render;


    }

    render()
    {
        console.log('yay base breakout render called');
    }

    /*render()
    {
        let elements = super.render();

        console.log(elements);

        if (! Array.isArray(elements))
        {
            elements = [elements];
        }

        for (let element of elements)
        {
            console.log(element);
        }

        return elements[0];
    }*/
}

class Foo extends BaseElement
{
    render()
    {
        console.log('Foo render!');

        return this.html`<p>Hello!</p>`
    }
}

class Bar extends BaseElement // BaseBreakoutElement
{
    render()
    {
        let container = document.createElement('div');

        console.log('bar rendered');

        return container;
    }
}

Bar = breakout(Bar);

Bar.define('x-bar');
Foo.define('x-foo');

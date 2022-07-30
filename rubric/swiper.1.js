// Requires: Rubric

// class BaseSwiperElement extends HTMLElement
// {
//     connectedCallback()
//     {
//         this.classList.add('div');
//         this.classList.add('swiper-component'); // This should instead be something like 'rubric-div' as it styles the element like a div.
//         this.classList.add(this.localName);
//     }
// }

class BaseSwiperElement extends HyperHTMLElement
{
    render()
    {
        // this.classList.add('div');

        // let container = document.createElement('div');

        // container.classList.add('div');
        // container.classList.add('swiper-component');
        // container.classList.add(this.localName);

        // while (this.childNodes.length)
        // {
        //     container.appendChild(this.firstChild);
        // }
        //
        // this.innerHTML = '';
        //
        // this.appendChild(container);

        // console.log('Swiper Elment Parent:');
        // console.log(this.parentElement);

        let element = document.createElement('div');
        let comment = document.createComment(`<${this.localName} />`);
        // element.innerHTML = 'Created outside of this!';

        // element.classList.add('div');
        // element.classList.add('swiper-component');
        element.classList.add(this.localName);

        //this.parentElement.appendChild(element);

        // let index = [...this.parentElement.children].indexOf(this);

        // console.log('Vanilla Index: ' + index);
        // console.log('jQuery Index: ' + $(this).index());

        // this.parentElement.insertBefore(comment, this);
        this.parentElement.insertBefore(element, this);

        element.innerHTML = this.innerHTML;
        // this.innerHTML = '';
        this.parentElement.removeChild(this);

        // this.classList.add('div');
        // this.classList.add('swiper-component');
        // this.classList.add(this.localName);

        return null;
    }
}

class SwiperContainerElement extends BaseSwiperElement
{
    render()
    {
        let params = this.getAttribute('params');

        if (params)
        {
            params = JSON.parse(params);
        }
        else
        {
            params = null;
        }

        let element = document.createElement('div');
        let comment = document.createComment(`<${this.localName} />`);

        element.classList.add(this.localName);

        // this.parentElement.insertBefore(comment, this);
        this.parentElement.insertBefore(element, this);

        element.innerHTML = this.innerHTML;
        this.parentElement.removeChild(this);

        // console.log('swiper element innerHTML');
        // console.log(element.innerHTML);
        // console.log('params:');
        // console.log(params);

        this._swiper = new Swiper(element, params);

        return null;
    }
}

classes =
[
    'swiper-container',
    'swiper-wrapper',
    'swiper-slide',
    'swiper-pagination',
    'swiper-button-prev',
    'swiper-button-next',
    'swiper-scrollbar'
];

// Define all custom elements
for (let index in classes)
{
    let swiper_class = classes[index];

    if (swiper_class === 'swiper-container')
    {
        var cls = class extends SwiperContainerElement {};
    }
    else
    {
        var cls = class extends BaseSwiperElement {};
    }

    // customElements.define(swiper_class, cls);
    cls.define(swiper_class);
}

class BaseSwiperElement extends BaseElement
{
    render()
    {
        let element = document.createElement('div');

        copy_attributes(this, element);

        element.classList.add(this.localName);

        element.innerHTML = this.innerHTML;

        return element;
    }
}

class SwiperContainerElement extends BaseSwiperElement
{
    render()
    {
        let element = super.render();
        let script = document.createElement('script');

        let params = this.getAttribute('params');

        if (params)
        {
            params = JSON.parse(params);
        }
        else
        {
            params = null;
        }

        script.innerHTML = `let params = ${JSON.stringify(params)}; let element = $('script').last().prev(); let swiper = new Swiper(element, params);`;

        let elements = [element, script];

        return elements;
    }
}

SwiperContainerElement = breakout(SwiperContainerElement);
BaseSwiperElement = breakout(BaseSwiperElement);

let classes =
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
for (let swiper_class of classes)
{
    if (swiper_class === 'swiper-container')
    {
        var cls = class extends SwiperContainerElement {};
    }
    else
    {
        var cls = class extends BaseSwiperElement {};
    }

    cls.define(swiper_class);
}

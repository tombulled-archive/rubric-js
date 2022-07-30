// Dependency: nunjucks
// Dependency: jQuery

names =
[
    'swiper-container',
    'swiper-wrapper',
    'swiper-slide',
    'swiper-pagination',
    'swiper-button-prev',
    'swiper-button-next',
    'swiper-scrollbar',
];

components = {};

for (name of names) {
    var template =
    [
        `<div class="${name}`,
        '{% if attrs["class"] %}',
            ' {{attrs["class"]}}"',
        '{% else %}',
            '"',
        '{% endif %}',
        '{% for key, val in attrs %}',
            '{% if key != "class" %}',
                ' {{key}}="{{val}}"',
            '{% endif %}',
        '{% endfor %}',
        '{% if contents %}',
            '>{{contents}}</',
            `${name}`,
            '>',
        '{% else %}',
            ' />',
        '{% endif %}',
    ].join('').trim()

    components[name] = component
    (
        name = name,
        html = template,
        css = null,
        js = null,
        dependencies = ['jquery', 'swiper'],
    );
}

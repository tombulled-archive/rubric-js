// Create Rubric object to avoid invading global namespace
var app = Object();

// Create app attributes
app.data = {"some-var": "foo"};
app.components = {"rubric-view-hello-world": {"name": "rubric-view-hello-world", "local": "<center><h1>Welcome to Rubric!</h1></center>", "global": null, "dependencies": null}, "swiper-container": {"name": "swiper-container", "local": "<div class=\"swiper-container{% if attrs[\"class\"] %} {{attrs[\"class\"]}}\"{% else %}\"{% endif %}{% for attr_key, attr_val in attrs.items() %}{% if attr_key != \"class\" %} {{attr_key}}=\"{{attr_val}}\"{% endif %}{% endfor %}{% if contents %}>{{contents}}</div>{% else %} />{% endif %}", "global": null, "dependencies": null}, "swiper-wrapper": {"name": "swiper-wrapper", "local": "<div class=\"swiper-wrapper{% if attrs[\"class\"] %} {{attrs[\"class\"]}}\"{% else %}\"{% endif %}{% for attr_key, attr_val in attrs.items() %}{% if attr_key != \"class\" %} {{attr_key}}=\"{{attr_val}}\"{% endif %}{% endfor %}{% if contents %}>{{contents}}</div>{% else %} />{% endif %}", "global": null, "dependencies": null}, "swiper-slide": {"name": "swiper-slide", "local": "<div class=\"swiper-slide{% if attrs[\"class\"] %} {{attrs[\"class\"]}}\"{% else %}\"{% endif %}{% for attr_key, attr_val in attrs.items() %}{% if attr_key != \"class\" %} {{attr_key}}=\"{{attr_val}}\"{% endif %}{% endfor %}{% if contents %}>{{contents}}</div>{% else %} />{% endif %}", "global": null, "dependencies": null}, "swiper-pagination": {"name": "swiper-pagination", "local": "<div class=\"swiper-pagination{% if attrs[\"class\"] %} {{attrs[\"class\"]}}\"{% else %}\"{% endif %}{% for attr_key, attr_val in attrs.items() %}{% if attr_key != \"class\" %} {{attr_key}}=\"{{attr_val}}\"{% endif %}{% endfor %}{% if contents %}>{{contents}}</div>{% else %} />{% endif %}", "global": null, "dependencies": null}, "swiper-button-prev": {"name": "swiper-button-prev", "local": "<div class=\"swiper-button-prev{% if attrs[\"class\"] %} {{attrs[\"class\"]}}\"{% else %}\"{% endif %}{% for attr_key, attr_val in attrs.items() %}{% if attr_key != \"class\" %} {{attr_key}}=\"{{attr_val}}\"{% endif %}{% endfor %}{% if contents %}>{{contents}}</div>{% else %} />{% endif %}", "global": null, "dependencies": null}, "swiper-button-next": {"name": "swiper-button-next", "local": "<div class=\"swiper-button-next{% if attrs[\"class\"] %} {{attrs[\"class\"]}}\"{% else %}\"{% endif %}{% for attr_key, attr_val in attrs.items() %}{% if attr_key != \"class\" %} {{attr_key}}=\"{{attr_val}}\"{% endif %}{% endfor %}{% if contents %}>{{contents}}</div>{% else %} />{% endif %}", "global": null, "dependencies": null}, "swiper-scrollbar": {"name": "swiper-scrollbar", "local": "<div class=\"swiper-scrollbar{% if attrs[\"class\"] %} {{attrs[\"class\"]}}\"{% else %}\"{% endif %}{% for attr_key, attr_val in attrs.items() %}{% if attr_key != \"class\" %} {{attr_key}}=\"{{attr_val}}\"{% endif %}{% endfor %}{% if contents %}>{{contents}}</div>{% else %} />{% endif %}", "global": null, "dependencies": null}};
app.routes = {"/": "rubric-view-hello-world"};
app.router_routes = {};

// Create app methods
app.route = function (component_name, params, query)
{
	console.log(component_name + ' ' + params + ' ' + query);

};

// Populate router routes
$.each(app.routes, (key, val) => app.router_routes[key] = (params, query) => app.route(val, params, query));

// Create router
app.router = new Navigo(null, true, '#');

// Apply routes to router
app.router.on(app.router_routes).resolve();

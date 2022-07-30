
// Config
let prefix = 'b-';
let cls_component = 'bootstrap-component';
let components = [];
let contexts =
[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
];

// Functions
function true_local_name(local_name)
{
    return local_name.substring(prefix.length);
}

// Base
class BaseBootstrapElement extends HTMLElement
{
    connectedCallback()
    {
        // this.classList.add(cls_component);
        // this.classList.add(true_local_name(this.localName));

        // Start observing the target node for configured mutations
        // mutation_observer.observe(this, (mutation) => this.update());

        // this.mutation_observer = new BaseMutationObserver({ attributes: false, childList: true, subtree: true });
        // this.mutation_observer.observe(this, (mutation) => this.update());
    }

    update(mutation=null)
    {
        if (mutation)
        {
            self = mutation['target'];
        }
        else
        {
            self = this;
        }

        self.mutation_observer.disconnect();
    }
}

// Alerts
class BaseBootstrapAlertElement extends BaseBootstrapElement
{
    connectedCallback()
    {
        // let container = document.createElement('div');

        // container.innerHTML = 'container!';
        // this.innerHTML = '';

        // this.appendChild(container);

        // console.log('alert connected');

        // super.connectedCallback();
        //
        // this.classList.add('div');
        //
        // if (true_local_name(this.localName) != 'alert')
        // {
        //     this.classList.add('alert');
        // }
        //
        // this.setAttribute('role', 'alert');

        this.mutation_observer = new BaseMutationObserver(this, this.update, { attributes: false, childList: true, subtree: true });
        // this.mutation_observer = new BaseMutationObserver({ attributes: false, childList: true, subtree: true });
        // this.mutation_observer.observe(this, (mutation) => this.update());
        // this.mutation_observer.observe(this, this.update);
        //this.mutation_observer.observe(this, this.update);
        // Start observing the target node for configured mutations
        // mutation_observer.observe(this, this.connectedCallback);
        // mutation_observer.observe(this, (mutation) => this.connectedCallback());
        // mutation_observer.observe(this, (mutation) => this.update());
    }

    update(mutation=null)
    {
        // console.log(mutation);
        if (mutation)
        {
            self = mutation['target'];
        }
        else
        {
            self = this;
        }

        console.log(mutation);
        console.log('alert update ' + self.mutation_observer.connected);
        console.log(self);
        // console.log(self.outerHTML);

        if (! self.mutation_observer.connected)
        {
            return;
        }

        console.log('alert acting on update');

        super.update(mutation);
        self.mutation_observer.connected = false;

        let container = document.createElement('div');

        container.classList.add(cls_component);
        container.classList.add(true_local_name(self.localName));

        container.classList.add('div');

        if (true_local_name(self.localName) != 'alert')
        {
            container.classList.add('alert');
        }

        container.setAttribute('role', 'alert');

        while (self.childNodes.length)
        {
            let child = self.firstChild;

            let mutation_observer = child.mutation_observer;

            // console.log('child mutation observer:');
            // console.log(mutation_observer);
            //
            // if (mutation_observer)
            // {
            //     mutation_observer.disconnect();
            // }

            // console.log('appending:');
            // console.log(child);

            container.appendChild(child);

            // if (mutation_observer)
            // {
            //     mutation_observer.observe(child, (mutation) => child.update());
            // }
        }

        //container.innerHTML = this.innerHTML;
        //this.innerHTML = '';

        // console.log(container.outerHTML);

        self.appendChild(container);



        // console.log('update!' + ' ' + this.innerHTML);

        // this.mutation_observer.disconnect();
    }
}

let alert_suffixes = [''];

for (let context of contexts)
{
    alert_suffixes.push(`-${context}`);
}

for (let alert_suffix of alert_suffixes)
{
    components.push
    (
        {
            'name': `alert${alert_suffix}`,
            'class': class extends BaseBootstrapAlertElement {}
        }
    );
}

// Alert links
class BaseBootstrapAlertLinkElement extends BaseBootstrapElement
{
    connectedCallback()
    {
        console.log('alert-link connected');
        // console.log(this);

        // super.connectedCallback();
        this.mutation_observer = new BaseMutationObserver(this, this.update, { attributes: false, childList: true, subtree: true });
        // this.mutation_observer = new BaseMutationObserver({ attributes: false, childList: true, subtree: true });
        // let func = (mutation) => console.log('alert-link-called-back');
        // console.log('func:');
        // console.log(func);
        //console.log(func(1));
        // this.mutation_observer.observe(this, this.update);

        // console.log(this.mutation_observer);

        // this.classList.add('a');

        // console.log(this.innerHTML);
    }

    update(mutation=null)
    {
        // console.log(this);
        if (mutation)
        {
            self = mutation['target'];
        }
        else
        {
            self = this;
        }

        console.log('alert-link update');
        console.log(self);

        if (! self.mutation_observer.connected)
        {
            return;
        }

        console.log('alert-link acting on update');

        super.update();
        self.mutation_observer.connected = false;

        let container = document.createElement('a');

        container.classList.add(cls_component);
        container.classList.add(true_local_name(self.localName));
        container.classList.add('a');

        while (self.childNodes.length)
        {
            let child = self.firstChild;

            let mutation_observer = self.mutation_observer;

            // if (mutation_observer)
            // {
            //     mutation_observer.disconnect();
            // }

            container.appendChild(child);

            // if (mutation_observer)
            // {
            //     mutation_observer.observe(child, (mutation) => child.update());
            // }
        }

        self.appendChild(container);
    }
}

components.push
(
    {
        'name': 'alert-link',
        'class': class extends BaseBootstrapAlertLinkElement {}
    }
);

// Define all custom elements
for (let index in components)
{
    let component = components[index];

    let name = prefix + component['name'];
    let cls = component['class'];

    // console.log(name + ' ' + cls);

    customElements.define(name, cls);
}

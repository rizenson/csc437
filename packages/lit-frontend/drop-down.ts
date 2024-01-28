class MyComponent extends HTMLElement {
    wrapper = document.createElement("span");
}

customElements.define('my-component', MyComponent);
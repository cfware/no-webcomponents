const supported = window.customElements && document.body.attachShadow;

if (!window.customElements) {
	/* Suppress errors for registration of other modules. */
	window.customElements = {
		isStub: true,
		define() {}
	};
} else if (!!document.body.attachShadow) {
	window.customElements.define('no-webcomponents', class extends HTMLElement {
		connectedCallback() {
			document.body.removeAttribute('unresolved');
			this.innerHTML = '';
			this.style = 'display:none';
		}
	});
}

export default supported;

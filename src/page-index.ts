export default class PageIndex extends HTMLElement {
	public connectedCallback(): void {
		this.render();
	}

	private getAttr = (attr: string, fallback?: string) => {
		if (this.hasAttribute(attr)) return this.getAttribute(attr) || fallback;
		return undefined;
	};

	private render(): void {
		// Add id to body if there isn't one already
		document.body.id || document.body.setAttribute("id", "page-index-body");

		// Build Page Index Header Area
		let header = this.getAttr("header", "Page Index");
		header = header ? `<h2>${header}</h2>` : "";
		let top = this.getAttr("top", "Top");
		top = top ? `<a href="#${document.body.id}">${top}</a>` : "";
		const headerArea = header || top ? `<div class="page-index-header">${header}${top}</div>` : "";

		// Get all Index Items from selector
		const targets = document.querySelectorAll(this.getAttribute("selector") || "main h2") as NodeListOf<HTMLElement>;

		// Add id to targets if there isn't one already
		targets.forEach((header, i) => !header.id && header.setAttribute("id", "page-index-" + i));

		// Build Page Index HTML
		this.innerHTML = `
        <nav aria-label="${this.getAttribute("aria") || "Page Index"}">${headerArea}<ul>${Array.from(targets)
			.map((header) => `<li class="page-index-item-${header.tagName.toLowerCase()}"><a href="#${header.id}">${header.dataset.index || header.textContent}</a></li>`)
			.join("")}</ul></nav>`;
	}
}
customElements.define("page-index", PageIndex);

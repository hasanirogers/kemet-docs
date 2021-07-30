import { LitElement, css, html } from 'lit';
import { svgSearch } from '../../static/svgs.js';

class DocsSearchIcon extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        button {
          display: inline-block;
          border-radius: 50%;
          border: none;
          padding: 0.5rem 0.75rem;
          background: var(--kemet-color-primary);
        }

        svg {
          width: 24px;
          height: 24px;
          position: relative;
          top: 3px;
        }

        circle {
          stroke-width: 4px;
        }
      `
    ]
  }

  render() {
    return html`
      <button>${svgSearch}</button>
    `;
  }
}

customElements.define('docs-search-icon', DocsSearchIcon);

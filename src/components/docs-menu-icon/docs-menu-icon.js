import { LitElement, css, html } from 'lit';
import { svgMenu } from '../../static/svgs.js';

class DocsMenuIcon extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          cursor: pointer;
        }

        svg {
          width: 24px;
          height: 24px;
        }

        button {
          border: 0;
          background: transparent;
        }

        polygon {
          fill: var(--kemet-color-black-50);
        }
      `
    ]
  }

  render() {
    return html`
      <button @click="${() => this.toggleMenu()}">
        ${svgMenu}
      </button>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  toggleMenu() {
    const drawer = document.querySelector('kemet-drawer');
    drawer.opened = !drawer.opened;
  }
}

customElements.define('docs-menu-icon', DocsMenuIcon);

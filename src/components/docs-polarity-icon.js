import { LitElement, css, html } from 'lit';
import { svgMoon, svgSun } from '../static/svgs.js';

class DocsPolarityIcon extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
          cursor: pointer;
          padding: 0 0.5rem;
        }
        svg {
          width: 24px;
          height: 24px;
        }
        :host([size="desktop"]) svg {
          width: 32px;
          height: 32px;
        }
        path {
          fill: rgb(var(--kemet-color-primary));
        }
        .sun,
        :host([polarity="dark"]) .moon {
          display: none;
        }
        :host([polarity="dark"]) .sun {
          display: inline-block;
        }
        button {
          border: 0;
          cursor: pointer;
          background: transparent;
        }
        .sun path {
          fill: var(--docs-header-foreground) !important;
          stroke: var(--docs-header-foreground) !important;
        }
        .sun circle {
          fill: var(--docs-header-foreground) !important;
          stroke: transparent !important;
        }
      `
    ]
  }

  static get properties() {
    return {
      polarity: {
        type: String,
        reflect: true
      },
      size: {
        type: String,
        reflect: true
      }
    }
  }

  constructor() {
    super();

    this.size = 'mobile';
    this.polarity = localStorage.getItem('kemet-docs-polarity') ? localStorage.getItem('kemet-docs-polarity') : 'light';
  }

  firstUpdated() {
    this.initPolarity();
  }

  render() {
    return html`
      <button @click="${() => this.togglePolarity()}">
        <span class="moon">${svgMoon}</span>
        <span class="sun">${svgSun}</span>
      </button>
    `;
  }

  togglePolarity() {
    if (this.polarity === 'light') {
      this.polarity = 'dark';
    } else {
      this.polarity = 'light';
    }

    this.dispatchEvent(
      new CustomEvent('docs-polarity-change', {
        bubbles: true,
        composed: true,
        detail: this.polarity,
      })
    );

    window.localStorage.setItem('kemet-docs-polarity', this.polarity);
    this.initPolarity();
  }

  initPolarity() {
    document.querySelector('html').setAttribute('polarity', this.polarity);
  }
}

customElements.define('docs-polarity-icon', DocsPolarityIcon);

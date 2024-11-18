import { LitElement, css, html } from 'lit';
import { svgMoon, svgSun } from '../static/svgs.js';

class DocsThemeIcon extends LitElement {
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
          fill: var(--kemet-color-primary);
        }
        .sun,
        :host([theme="dark"]) .moon {
          display: none;
        }
        :host([theme="dark"]) .sun {
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
      theme: {
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
    this.theme = localStorage.getItem('kemet-docs-theme') ? localStorage.getItem('kemet-docs-theme') : 'light';
  }

  firstUpdated() {
    this.initTheme();
  }

  render() {
    return html`
      <button @click="${() => this.toggleTheme()}">
        <span class="moon">${svgMoon}</span>
        <span class="sun">${svgSun}</span>
      </button>
    `;
  }

  toggleTheme() {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }

    this.dispatchEvent(
      new CustomEvent('docs-theme-change', {
        bubbles: true,
        composed: true,
        detail: this.theme,
      })
    );

    window.localStorage.setItem('kemet-docs-theme', this.theme);
    this.initTheme();
  }

  initTheme() {
    document.querySelector('html').setAttribute('theme', this.theme);
  }
}

customElements.define('docs-theme-icon', DocsThemeIcon);

import { LitElement, css, html } from 'lit';
import { svgAnubis } from '../static/svgs.js';
import { stylesBase } from '../static/styles.js';

import './docs-theme-icon.js';

class DocsHeader extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 999;
          padding: 1rem;
          box-sizing: border-box;
          color: var(--docs-header-foreground);
          background: var(--docs-header-background);
        }

        @media only screen and (min-width: 768px) {
          :host {
            box-shadow: var(--docs-box-shadow1);
          }
        }

        a {
          color: var(--docs-header-foreground);
          text-decoration: none;
        }

        button {
          border: 0;
          background: transparent;
        }

        nav > * {
          cursor: pointer;
        }

        .mobile {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
        }

        .desktop {
          display: none;
        }

        .search {
          font-size: 1rem;
          box-sizing: border-box;
          width: 100%;
          height: 50px;
          padding: 0.8rem 1.2rem;
          border: 1px solid var(--docs-header-foreground);
          border-radius: 0.5rem;
          transition: box-shadow 0.3s ease 0s;
        }

        @media only screen and (min-width: 768px) {
          .mobile {
            display: none;
          }

          .desktop {
            display: flex;
            gap: 2rem;
            margin: auto;
            max-width: 1280px;
            align-items: center;
            justify-content: space-between;
          }

          .logo {
            font-size: 1.25rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            text-shadow: 1px 1px var(--docs-header-foreground);
          }

          .logo svg {
            width: 48px;
            height: 48px;
            stroke: var(--docs-header-foreground);
          }

          .search {
            position: relative;
          }

          .search input {
            padding-left: 4rem;
          }

          .search line,
          .search circle {
            stroke: var(--docs-header-foreground);
          }

          .search svg {
            position: absolute;
            left: 0.75rem;
            width: 32px;
            height: 32px;
            top: 50%;
            transform: translateY(-50%);
          }

          .links {
            display: flex;
            gap: 1rem;
            align-items: center;
          }

          .links a {
            transition: all 300ms ease;
          }

          .links a:hover {
            color: var(--kemet-color-link);
          }

          .links svg {
            width: 32px;
            height: 32px;
            position: relative;
            top: 2px;
          }

          .links :first-child svg {
            width: 28px;
            margin-right: 0.8rem;
          }

          .github path {
            fill-opacity: 1;
          }

          .logo svg,
          .github path,
          .storybook defs path {
            fill: var(--docs-header-foreground);
          }

          .storybook .inner-s {
            fill: var(--docs-header-background);
          }
        }
      `
    ]
  }

  static get properties() {
    return {
      baseurl: {
        type: String,
        attribute: 'base-url'
      },
    }
  }

  constructor() {
    super();
    this.baseurl = window.location.origin;
  }

  render() {
    return html`
      <nav class="mobile">
        <docs-theme-icon></docs-theme-icon>
        <docs-menu-icon></docs-menu-icon>
      </nav>
      <nav class="desktop">
        <a href="${this.baseurl}" class="logo">
          ${svgAnubis}
          <span>Kemet UI</span>
        </a>
        <div class="links">
          <a href="${this.baseurl}" title="Home">Home</a>
          <a href="${this.baseurl}/getting-started">Getting Started</a>
          <a href="${this.baseurl}/templates">Templates</a>
          <a href="https://github.com/hasanirogers/kemet-ui" title="GitHub">GitHub</a>
          <a href="https://storybook.kemet.dev" title="Storybook">Storybook Docs</a>
          <docs-theme-icon size="desktop"></docs-theme-icon>
        </div>
      </nav>
    `;
  }
}

customElements.define('docs-header', DocsHeader);

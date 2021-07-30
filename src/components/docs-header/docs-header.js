import { LitElement, css, html } from 'lit';

import '../docs-search-icon/docs-search-icon.js';
import '../docs-theme-icon/docs-theme-icon.js';
import '../docs-menu-icon/docs-menu-icon.js';

import { svgAnubis, svgGitHub, svgStorybook, svgSearch } from '../../static/svgs.js';
import { stylesBase } from '../../static/styles.js';

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
          background: var(--kemet-color-white);
        }

        @media only screen and (min-width: 768px) {
          :host {
            box-shadow: var(--docs-box-shadow1);
          }
        }

        a {
          color: var(--kemet-color-black);
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
          display: grid;
          gap: 1rem;
          align-items: center;
          grid-template-columns: auto 1fr auto auto;
        }

        .desktop {
          display: none;
        }

        .search {
          font-size: 1rem;
          box-sizing: border-box;
          color: var(--kemet-color-primary);
          width: 100%;
          height: 50px;
          padding: 0.8rem 1.2rem;
          border: 0.1rem solid var(--kemet-color-black-50);
          border-radius: 0.4rem;
          background-color: rgba(255, 255, 254, 0.7);
          transition: box-shadow 0.3s ease 0s;
        }

        @media only screen and (min-width: 768px) {
          .mobile {
            display: none;
          }

          .desktop {
            display: grid;
            gap: 2rem;
            margin: auto;
            max-width: 1280px;
            align-items: center;
            grid-template-columns: 1fr minmax(auto, 420px) auto auto;
          }

          .logo {
            font-size: 1.25rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
          }

          .logo svg {
            width: 48px;
            height: 48px;
          }

          .search {
            position: relative;
          }

          .search input {
            padding-left: 4rem;
          }

          .search line,
          .search circle {
            stroke: var(--kemet-color-black-50);
          }

          .search svg {
            position: absolute;
            left: 1rem;
            width: 32px;
            height: 32px;
            top: 50%;
            transform: translateY(-50%);
          }

          .links {
            display: flex;
            gap: 1rem;
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

          .github path,
          .storybook defs path {
            fill: var(--kemet-color-black-50);
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

  render() {
    return html`
      <nav class="mobile">
        <docs-search-icon @click="${() => this.showSearchModal()}"></docs-search-icon>
        <docs-theme-icon></docs-theme-icon>
        <docs-menu-icon></docs-menu-icon>
      </nav>
      <nav class="desktop">
        <a href="${this.baseurl}" class="logo">
          ${svgAnubis}
          <span>Kemet UI</span>
        </a>
        <button class="search" @click="${() => this.showSearchModal()}">
          ${svgSearch}
        </button>
        <div class="links">
          <a href="https://github.com/hasanirogers/kemet-ui" class="github" title="GitHub">${svgGitHub}</a>
          <a href="https://storybook.kemet.dev" class="storybook" title="Storybook">${svgStorybook}</a>
          <docs-theme-icon size="desktop"></docs-theme-icon>
        </div>
      </nav>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  showSearchModal() {
    const modal = document.querySelector('kemet-modal');
    const searchInput = modal.querySelector('docs-search').shadowRoot.querySelector('input');

    modal.opened = true;
    searchInput.focus();
  }
}

customElements.define('docs-header', DocsHeader);

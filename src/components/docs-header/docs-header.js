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

        .banner {
          color: #d97706;
          margin: -1rem -1rem 1rem -1rem;
          background-color: #ffe8cc;
        }

        .banner a {
          color: #d97706;
          font-weight: bold;
        }

        .banner > div {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          padding: 1rem;
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

  render() {
    return html`
      <section class="banner">
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
          </span>
          <span>You are viewing obsolete documentation. <a href="https://storybook.kemet.dev">View the current docs in Storybook.</a></span>
        </div>
      </section>
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
    const modal = document.querySelector('body > kemet-modal');
    const searchInput = modal.querySelector('docs-search').shadowRoot.querySelector('input');

    modal.opened = true;
    searchInput.focus();
  }
}

customElements.define('docs-header', DocsHeader);

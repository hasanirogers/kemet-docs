import { LitElement, css, html } from 'lit';

class DocsNav extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin-top: 4rem;
          height: 100%;
        }

        a {
          color: rgb(var(--kemet-color-white));
          text-decoration: none;
        }

        span {
          color: rgb(var(--kemet-color-white));
        }

        nav {
          position: fixed;
          height: 100%;
          width: 100%;
          padding: 1rem 2rem 8rem 2rem;
          overflow-y: auto;
          box-sizing: border-box;
        }

        :host([location='mobile']) {
          border-left: 1px solid var(--kemet-color-white);
        }

        nav > a {
          display: block;
          margin: 1.5rem 0;
        }

        h2 {
          font-size: 2rem;
          margin: 3rem 0 2rem 0;
          text-transform: capitalize;
        }

        h3 {
          margin-top: 2.5rem;
        }

        ul {
          display: flex;
          gap: 1.5rem;
          flex-direction: column;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        button {
          font-size: 1rem;
          text-align: left;
          cursor: pointer;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          width: 100%;
          padding: 0.5rem 0;
          border: none;
          background: transparent;
        }

        kemet-accordion[opened]  {
          margin-bottom: 1rem;
        }

        kemet-accordion[opened] button {
          margin-bottom: 1rem;
          border-bottom: 1px solid rgb(var(--kemet-color-black) / 50%);
        }

        .chevron svg {
          width: 32px;
          height: 32px;
          fill: rgb(var(--kemet-color-white));
          transform: rotate(90deg);
          transition: transform 300ms ease;
        }

        kemet-accordion[opened] .chevron svg {
          transform: rotate(270deg);
        }

        :host([location="desktop"]) {
          display: none;
        }

        @media only screen and (min-width: 768px) {
          :host([location="desktop"]) {
            margin-top: 0;
            position: relative;
            display: block;
          }
          :host([location="desktop"]) nav {
            position: static;
            overflow: hidden;
            padding: 0;
          }
          :host([location="desktop"]) a {
            color: var(--docs-link-color);
          }
          :host([location="desktop"]) svg {
            fill: var(--docs-accordion-color);
          }
          :host([location="desktop"]) span {
            color: var(--docs-accordion-color);
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
      brand: {
        type: String,
        reflect: true
      }
    }
  }

  constructor() {
    super();
    this.baseurl = window.location.origin;
  }

  render() {
    return html`
      <nav>
        <h2>Kemet UI</h2>
        <a href="${this.baseurl}">Home</a>
        <a href="${this.baseurl}/getting-started">Getting Started</a>
        <a href="${this.bareurl}/templates">Templates</a>
        <a href="https://github.com/hasanirogers/kemet-ui">GitHub</a>
        <a href="https://storybook.kemet.dev">Storybook Docs</a>
        <h3>Integrations</h3>
        <a href="${this.baseurl}/integrations/react">React</a>
        <a href="${this.baseurl}/integrations/react-legacy">React (Legacy)</a>
        <a href="${this.baseurl}/integrations/angular">Angular</a>
        <a href="${this.baseurl}/integrations/vue">Vue</a>
        <a href="${this.baseurl}/integrations/alpine">Alpine</a>
        <a href="${this.baseurl}/integrations/next">Next</a>
        <a href="${this.baseurl}/integrations/svelte">Svelte</a>
        <a href="${this.baseurl}/integrations/lit">Lit</a>
        <a href="${this.baseurl}/integrations/solid">Solid</a>
        <h3>Guides</h3>
        <a href="${this.baseurl}/guides/scss">Using SCSS</a>
        <a href="${this.baseurl}/guides/forms">Working with Forms</a>
        <a href="${this.baseurl}/guides/using-jsx">Web Components and JSX</a>
      </nav>
    `;
  }
}

customElements.define('docs-nav', DocsNav);

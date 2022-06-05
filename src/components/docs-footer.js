import { LitElement, css, html } from 'lit';

class DocsFooter extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          font-size: 0.9rem;
          display: block;
          max-width: 1280px;
          margin: 4rem auto 0 auto;
          padding: 1rem 0;
          border-top: 1px solid var(--kemet-color-black-50);;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        nav {
          display: flex;
          gap: 1rem;
        }
        footer {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr auto;
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
      date: {
        type: String
      }
    }
  }

  constructor() {
    super();
    this.baseurl = window.location.origin;
  }

  firstUpdated() {
    this.getYear();
  }

  render() {
    return html`
      <footer>
        <span>
          ${this.date} Kemet UI
        </span>
        <nav>
          <a href="${this.baseurl}">Home</a>
          <a href="https://github.com/hasanirogers/kemet-ui">GitHub</a>
          <a href="https://storybook.kemet.dev">Docs</a>
        </nav>
      </footer>
    `;
  }

  getYear() {
    const date = new Date();
    this.date = date.getFullYear();
  }
}

customElements.define('docs-footer', DocsFooter);

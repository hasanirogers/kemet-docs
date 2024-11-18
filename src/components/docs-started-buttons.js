import { LitElement, css, html } from 'lit';
// import 'kemet-ui/dist/components/kemet-button.js';
// import 'kemet-ui/dist/components/kemet-icon.js';

class DocsStartedButtons extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
          z-index: 2;
        }

        section {
          display: grid;
          gap: 2rem;
          padding: 2rem;
        }

        @media only screen and (min-width: 768px) {
          section {
            gap: 3rem;
            grid-template-columns: 1fr 1fr;
            max-width: 768px;
            margin: 2rem auto;
          }
        }

        kemet-button {
          --kemet-button-padding: 0.5rem 1rem;
          width: 100%;
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
      <section>
        <div>
          <kemet-button link="${this.baseurl}/getting-started" label="Getting Started" type="rounded">
            Get Started <kemet-icon slot="right" icon="chevron-right" size="20"></kemet-icon>
          </kemet-button>
        </div>
        <div>
          <kemet-button link="https://github.com/hasanirogers/kemet-ui" label="GitHub" type="rounded">
            Git Hub <kemet-icon slot="right" icon="github" size="20"></kemet-icon>
          </kemet-button>
        </div>
      </section>
    `;
  }
}

customElements.define('docs-started-buttons', DocsStartedButtons);

import { LitElement, css, html } from 'lit';
import { svgChevron, svgGitHub } from '../../static/svgs.js';

class DocsStartedButtons extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
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

        docs-button {
          width: 100%;
          text-align: center;
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
    this.baseurl = '';
  }

  render() {
    return html`
      <section>
        <div>
          <docs-button link="${this.baseurl}/getting-started" label="Getting Started">
            Get Started ${svgChevron}
          </docs-button>
        </div>
        <div>
          <docs-button link="https://github.com/hasanirogers/kemet-ui" label="GitHub">
            Git Hub ${svgGitHub}
          </docs-button>
        </div>
      </section>
    `;
  }
}

customElements.define('docs-started-buttons', DocsStartedButtons);

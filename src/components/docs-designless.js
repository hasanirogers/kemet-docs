import { LitElement, css, html } from 'lit';
import { svgBlueprint } from '../static/svgs.js';

class DocsDesignless extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          color: rgb(var(--kemet-color-white));
          display: block;
        }

        p {
          line-height: 1.75;
          font-size: 1.2rem;
        }

        h2 {
          margin-bottom: 4rem;
          font-size: 3rem;
          text-align: center;
        }

        section {
          text-align: center;
          margin: 8rem 0;
          padding: 4rem 2rem 8rem 2rem;
          background-color: rgb(var(--kemet-color-primary));
        }

        @media only screen and (min-width: 768px) {
          section {
            text-align: left;
          }
        }

        section > div {
          max-width: 960px;
          margin: auto;
          align-items: center;
        }

        @media only screen and (min-width: 768px) {
          section > div {
            display: grid;
            gap: 2rem;
            grid-template-columns: auto 1fr;
          }
        }

        section > div > :first-child {
          display: inline-block;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 3px solid var(--kemet-color-white);
        }

        svg {
          width: 196px;
          height: 196px;
        }

        .designless1 {
          fill: rgb(var(--kemet-color-white));
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
      heading: {
        type: String,
      },
    }
  }

  render() {
    return html`
      <section>
        <h2>${this.heading}</h2>
        <div>
          <div>${svgBlueprint}</div>
          <p><slot></slot></p>
        </div>
      </section>
    `;
  }

}

customElements.define('docs-designless', DocsDesignless);

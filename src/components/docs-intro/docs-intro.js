import { LitElement, css, html } from 'lit';
import { svgAnubis } from '../../static/svgs.js';

class DocsIntro extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        h1 {
          font-size: 3rem;
          margin: 0;
          color: var(--kemet-color-primary);
        }

        h2 {
          margin-top: 0;
          color: var(--kemet-color-black-75);
        }

        h2 span {
          color: var(--kemet-color-black-25);
        }

        svg {
          width: 420px;
          height: 420px;
          margin: 1rem 0;
          fill: var(--kemet-color-primary);
        }

        code {
          color: var(--kemet-color-black-75);
          font-size: 1rem;
          display: inline-block;
          padding: 1rem 2rem;
          background: var(--kemet-color-white);
        }

        section {
          margin: 0 -2rem;
          text-align: center;
        }

      `
    ]
  }

  render() {
    return html`
      <section>
        ${svgAnubis}
        <h1>Kemet UI</h1>
        <h2>Design<span>{</span>less<span>}</span> Blueprint System</h2>
        <pre><code>npm i kemet-ui</code></pre>
      </section>
    `;
  }
}

customElements.define('docs-intro', DocsIntro);

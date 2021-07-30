import { LitElement, css, html } from 'lit';
import hljs from 'highlight.js';
import { stylesBase } from '../../static/styles.js';

class DocsShowcase extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: block;
          padding: 1.5rem 2rem;
          margin-bottom: 3rem;
          box-shadow: var(--docs-box-shadow);
          background: var(--docs-code-background);
        }

        pre {
          overflow-x: auto;
        }

        .hljs {
          color: var(--docs-code-color);
          margin-top: 2rem;
          line-height: 2;
          background: transparent;
        }
      `
    ];
  }

  static get properties() {
    return {
      snippet: {
        type: String
      },
      baseurl: {
        type: String,
        attribute: 'base-url'
      },
      caption: {
        type: String
      },
      language: {
        type: String,
      }
    };
  }

  constructor() {
    super();
    this.snippet = '';
    this.language = 'html';
  }

  firstUpdated() {
    this.makeSnippet();
    this.initHighlightJS();
  }

  render() {
    return html`
      <link href="${this.baseurl}/assets/styles/highlightjs/github.css" rel="stylesheet" />
      ${this.makeCaption()}
      <div class="demo">
        <slot></slot>
      </div>
      <pre><code class="${this.language}"></code></pre>
    `;
  }

  makeSnippet() {
    const slottedElement = this.shadowRoot.querySelector('slot').assignedElements();
    const textNode = document.createTextNode(slottedElement[0].outerHTML);
    this.shadowRoot.querySelector('code').append(textNode);
  }

  makeCaption() {
    if (this.caption) {
      return html`<p>${this.caption}</p>`;
    }

    return null;
  }

  initHighlightJS() {
    this.shadowRoot.querySelectorAll('pre code').forEach((element) => {
      hljs.highlightElement(element);
    });
  }
}

customElements.define('docs-showcase', DocsShowcase);

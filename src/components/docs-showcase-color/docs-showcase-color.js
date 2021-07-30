import { LitElement, css, html } from 'lit';
import hljs from 'highlight.js';
import { stylesBase, stylesFDSColors } from '../../static/styles.js';

class DocsShowcaseColor extends LitElement {
  static get styles() {
    return [
      stylesBase,
      stylesFDSColors,
      css`
        :host {
          display: block;
          padding: 2rem;
          margin-bottom: 3rem;
          box-shadow: var(--docs-box-shadow);
        }

        form {
          display: grid;
          gap: 3rem;
          grid-template-columns: 1fr 1fr;
        }

        p {
          padding: 2rem;
        }

        .hljs {
          color: var(--docs-code-color);
          margin-top: 2rem;
          background: transparent;
        }
      `
    ];
  }

  static get properties() {
    return {
      baseurl: {
        type: String
      },
      currentTextColor: {
        type: String
      },
      currentBGColor: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    this.baseurl = '';
    this.currentTextColor = 'white';
    this.currentBGColor = 'primary';
  }

  updated() {
    this.makeSnippet();
    this.initHighlightJS();
  }

  render() {
    return html`
      <link href="${this.baseurl}/assets/styles/vs2015.css" rel="stylesheet" />
      <form>
        <label>
          Change Background:
          <div class="select-box">
            <select @blur="${(event) => this.handleBGChange(event)}">
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="tertiary">Tertiary</option>
              <option value="black">Black</option>
              <option value="dark-gray">Dark Gray</option>
              <option value="medium-gray">Medium Gray</option>
              <option value="light-gray">Light Gray</option>
              <option value="white">White</option>
              <option value="disabled-dark">Disabled Dark</option>
              <option value="disabled-light">Disabled Light</option>
              <option value="disabled-text">Disabled Text</option>
              <option value="error">Error</option>
              <option value="caution">Caution</option>
              <option value="success">Success</option>
              <option value="surface">Surface</option>
            </select>
          </div>
        </label>
        <label>
          Change Text:
          <div class="select-box">
            <select @blur="${(event) => this.handleTextChange(event)}">
              <option value="ford-blue">Ford Blue</option>
              <option value="grabber-blue">Grabber Blue</option>
              <option value="twilight">Twilight</option>
              <option value="white" selected>White</option>
              <option value="black">Black</option>
              <option value="dark-gray">Dark Gray</option>
              <option value="medium-gray">Medium Gray</option>
              <option value="light-gray">Light Gray</option>
              <option value="disabled-dark">Disabled Dark</option>
              <option value="disabled-light">Disabled Light</option>
              <option value="disabled-text">Disabled Text</option>
              <option value="error">Error</option>
              <option value="caution">Caution</option>
              <option value="success">Success</option>
              <option value="surface">Surface</option>
            </select>
          </div>
        </label>
      </form>
<p class="fds-color__bg--${this.currentBGColor} fds-color__text--${this.currentTextColor}" >
  Use the controls above to visualize color contrast, then ensure accessibility using AXE.
</p>
<pre><code class="html"></code></pre>
    `;
  }

  handleBGChange(event) {
    this.currentBGColor = event.target.value;
  }

  handleTextChange(event) {
    this.currentTextColor = event.target.value;
  }

  makeSnippet() {
    const demoElement = this.shadowRoot.querySelector('p');
    const textNode = document.createTextNode(demoElement.outerHTML);
    this.shadowRoot.querySelector('code').innerHTML = '';
    this.shadowRoot.querySelector('code').append(textNode);
  }

  initHighlightJS() {
    this.shadowRoot.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }
}

customElements.define('docs-showcase-color', DocsShowcaseColor);

import { LitElement, css, html } from 'lit';
import { stylesBase, stylesFDSColors } from '../../static/styles.js';

class DocsShowcaseFont extends LitElement {
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
      `
    ];
  }

  static get properties() {
    return {
      baseurl: {
        type: String
      },
    };
  }

  constructor() {
    super();
    this.baseurl = '';
  }

  render() {
    return html`
      <form>
        <label>
          Change Font:
          <div class="select-box">
            <select @blur="${(event) => this.handleFontChange(event)}">
              <option value="system">System</option>
              <option value="mono">Mono</option>
              <option value="antenna" selected>Antenna</option>
              <option value="antenna-md">Antenna Medium</option>
              <option value="antenna-lt">Antenna Light</option>
              <option value="antenna-bold">Antenna Bold</option>
              <option value="antenna-cond">Antenna Condense</option>
              <option value="antenna-cond-bold">Antenna Condense Bold</option>
              <option value="antenna-cond-lt">Antenna Condense Light</option>
              <option value="antenna-cond-ext-lt">Antenna Condense Extra Light</option>
              <option value="antenna-cond-md">Antenna Condense Medium</option>
            </select>
          </div>
        </label>
      </form>
      <p>
        Use the controls above to change the font that this text displays in.
      </p>
    `;
  }

  handleFontChange(event) {
    const textElement = this.shadowRoot.querySelector('p');
    textElement.style.fontFamily = `var(--fds-font--${event.target.value})`;
  }
}

customElements.define('docs-showcase-font', DocsShowcaseFont);

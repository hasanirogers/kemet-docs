import { LitElement, html, css } from 'lit';

export class DocsButton extends LitElement {
  static get properties() {
    return {
      link: {
        type: String,
      },
      label: {
        type: String
      },
      target: {
        type: String,
      },
      reverse: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      css`
        :host {
          --color: var(--kemet-color-white);
          --background-color: var(--kemet-color-primary);

          color: var(--color);
          cursor: pointer;
          display: inline-block;
          border-radius: 0.5rem;
          background: var(--background-color);
        }

        :host([reverse]) {
          --color: var(--kemet-color-primary);
          --background-color: var(--kemet-color-white);
        }

        a,
        button {
          display: flex;
          cursor: pointer;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          width: 100%;
          height: 100%;
          text-decoration: none;
          border: none;
          color: var(--color);
          box-sizing: border-box;
          background: transparent;
        }

        ::slotted(svg) {
          width: 24px;
          height: 24px;
          fill: var(--kemet-color-white);
        }
      `,
    ];
  }

  constructor() {
    super();

    this.target = '_self';
  }

  render() {
    if(this.link) {
      return html`
        <a href=${this.link} aria-label="${this.label}">
          <slot></slot>
        </a>
      `;
    }

    return html`
      <button aria-label="${this.label}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('docs-button', DocsButton);

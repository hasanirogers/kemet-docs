import { LitElement, css, html } from 'lit';
import { svgChevron } from '../../static/svgs.js';

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
          color: var(--kemet-color-white);
          text-decoration: none;
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
          border-bottom: 1px solid var(--kemet-color-black-50);
        }

        .chevron svg {
          width: 32px;
          height: 32px;
          fill: var(--kemet-color-white);
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
            fill: var(--kemet-color-black);
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

  render() {
    return html`
      <nav>
        <h2>Kemet UI</h2>
        <a href="${this.baseurl}">Home</a>
        <a href="${this.baseurl}/getting-started">Getting Started</a>
        <kemet-accordion>
          <button slot="trigger">
            <span>Guides</span>
            <span class="chevron">${svgChevron}</span>
          </button>
          <div slot="panel">
            <ul>
              <li><a href="${this.baseurl}/guides/using-wrappers-react">Using Wrappers in React</a></li>
              <li><a href="${this.baseurl}/guides/web-components-with-angular">Web Components with Angular</a></li>
            </ul>
          </div>
        </kemet-accordion>

        <h2>Styles</h2>
        <kemet-accordion>
          <button slot="trigger">
            <span>About</span>
            <span class="chevron">${svgChevron}</span>
          </button>
          <div slot="panel">
            <ul>
              <li><a href="${this.baseurl}/styles/about#intro">Introduction</a></li>
              <li><a href="${this.baseurl}/styles/about#api">Core API</a></li>
              <li><a href="${this.baseurl}/styles/about#components">Components</a></li>
              <li><a href="${this.baseurl}/styles/about#config">Configuration</a></li>
            </ul>
          </div>
        </kemet-accordion>
        <kemet-accordion>
          <button slot="trigger">
            <span>Examples</span>
            <span class="chevron">${svgChevron}</span>
          </button>
          <div slot="panel">
            <ul>
              <li><a href="${this.baseurl}/styles/examples#flexrow">Flexrow</a></li>
              <li><a href="${this.baseurl}/styles/examples#flexgrid">Flexgrid</a></li>
              <li><a href="${this.baseurl}/styles/examples#flexcolumn">Flexcolumn</a></li>
              <li><a href="${this.baseurl}/styles/examples#flexlist">Flexlist</a></li>
              <li><a href="${this.baseurl}/styles/examples#visibility">Visibility</a></li>
              <li><a href="${this.baseurl}/styles/examples#typography">Typography</a></li>
              <li><a href="${this.baseurl}/styles/examples#alignment">Alignment</a></li>
              <li><a href="${this.baseurl}/styles/examples#spacing">Spacing</a></li>
            </ul>
          </div>
        </kemet-accordion>

        <h2>Components</h2>
        <a href="${this.baseurl}/components/accordion">Accordion</a>
        <a href="${this.baseurl}/components/carousel">Carousel</a>
        <a href="${this.baseurl}/components/draggable">Draggable</a>
        <a href="${this.baseurl}/components/drawer">Drawer</a>
        <a href="${this.baseurl}/components/flipcard">Flipcard</a>
        <a href="${this.baseurl}/components/modal">Modal</a>
        <a href="${this.baseurl}/components/popover">Popover</a>
        <a href="${this.baseurl}/components/ratio">Ratio</a>
        <a href="${this.baseurl}/components/rotator">Rotator</a>
        <a href="${this.baseurl}/components/scroll-link">Scroll Link</a>
        <a href="${this.baseurl}/components/scroll-nav">Scroll Nav</a>
        <a href="${this.baseurl}/components/scroll-snap">Scroll Snap</a>
        <a href="${this.baseurl}/components/tabs">Tabs</a>

        <h2>Templates</h2>
        <kemet-accordion>
          <button slot="trigger">
            <span>Zurb Foundation</span>
            <span class="chevron">${svgChevron}</span>
          </button>
          <div slot="panel">
            <ul>
              <li><a href="${this.baseurl}/templates/zurb-foundation#agency">Agency</a></li>
              <li><a href="${this.baseurl}/templates/zurb-foundation#ecommerce">E-Commerce</a></li>
              <li><a href="${this.baseurl}/templates/zurb-foundation#news">News</a></li>
              <li><a href="${this.baseurl}/templates/zurb-foundation#travel">Travel</a></li>
            </ul>
          </div>
        </kemet-accordion>
      </nav>
    `;
  }
}

customElements.define('docs-nav', DocsNav);

import { LitElement, css, html } from 'lit';
import { svgReact, svgAngular, svgVue, svgAlpine, svgNext, svgSvelte, svgLit, svgSolid } from '../static/svgs';

const integrations = [
  {
    name: "React",
    slug: "react",
    svg: svgReact
  },
  {
    name: "React (Legacy)",
    slug: "react-legacy",
    svg: svgReact
  },
  {
    name: "Angular",
    slug: "angular",
    svg: svgAngular
  },
  {
    name: "Vue",
    slug: "vue",
    svg: svgVue
  },
  {
    name: "Alpine",
    slug: "alpine",
    svg: svgAlpine
  },
  {
    name: "Next",
    slug: "next",
    svg: svgNext
  },
  {
    name: "Svelte",
    slug: "svelte",
    svg: svgSvelte
  },
  {
    name: "Lit",
    slug: "lit",
    svg: svgLit
  },
  {
    name: "Solid",
    slug: "solid",
    svg: svgSolid
  },
];

class DocsIntegrations extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          text-align: center;
          display: block;
          padding: 0 2rem;
          margin-top: 6rem;
        }

        p {
          font-size: 1.25rem;
          line-height: 1.5;
          margin: 4rem auto;
          max-width: 640px;
          opacity: 0.5;
        }

        h2 {
          font-size: 3rem;
          color: var(--docs-intro-subtitle-color);
        }

        svg {
          width: 80px;
          height: 80px;
        }

        ul {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 auto;
          padding: 0;
          list-style: none;
        }

        figure {
          margin: 0;
          padding: 0;
        }

        a {
          color: rgb(var(--kemet-color-primary));
          text-decoration: none;
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
    }
  }

  constructor() {
    super();
    this.integrations = [];
    this.baseurl = window.location.origin;
  }

  render() {
    return html`
      <div>
        <h2>Kemet UI Works Everywhere</h2>
        <ul>${this.makeIntegrations()}</ul>
        <p>Regardless of what framework or library you use, Kemet UI will work. That's power of Web Components. Some frameworks have caveats though. Be sure to check out the integration guides for more details.</p>
      </div>
    `;
  }

  makeIntegrations() {
    return integrations.map((framework) => html`
      <li>
        <figure>
          <a href="${this.baseurl}/integrations/${framework.slug}">
            ${framework.svg}
            <figcaption>
              ${framework.name}
            </figcaption>
          </a>
        </figure>
      </li>
    `);
  }
}

customElements.define('docs-integrations', DocsIntegrations);

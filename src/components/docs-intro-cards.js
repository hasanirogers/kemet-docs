import { LitElement, css, html } from 'lit';

class DocsIntroCards extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          margin-top: 6rem;
          padding: 4rem 2rem;
          background: lightgray;
        }

        section {
          display: grid;
          gap: 3rem;
        }

        @media only screen and (min-width: 768px) {
          section {
            max-width: 1280px;
            margin: auto;
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media only screen and (min-width: 1280px) {
          section {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        figure {
          margin: 0;
          padding: 2rem;
          border-radius: 0.5rem;
          background-color: var(--docs-card-background);
          box-shadow: var(--docs-box-shadow1);
        }

        figure img {
          width: 48px;
          position: relative;
          top: 0.25rem;
        }

        figure > span {
          display: inline-block;
          width: 4rem;
          text-align: center;
          padding: 1rem;
          border-radius: 50%;
          background-color: var(--kemet-color-primary);
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
      cards: {
        type: Array,
      },
    }
  }

  constructor() {
    super();
    this.cards = [];
    this.baseurl = window.location.origin;
  }

  firstUpdated() {
    this.getCardsData();
  }

  render() {
    return html`
      <section>
        ${this.makeCards()}
      </section>
    `;
  }

  async getCardsData() {
    const cards = await fetch(`${this.baseurl}/assets/data/intro-cards.json`)
      .then(response => response.json());

    this.cards = cards;
  }

  makeCards() {
    return this.cards.map((card) => html`
      <figure>
        <span>
          <img src="${this.baseurl}/assets/images/intro-card-icons/${card.slug}.svg" alt="${card.title}" />
        </span>
        <h3>${card.title}</h3>
        <figcaption>
          ${card.description}
        </figcaption>
      </figure>
    `)
  }
}

customElements.define('docs-intro-cards', DocsIntroCards);

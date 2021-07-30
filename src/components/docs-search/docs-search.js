import { LitElement, css, html } from 'lit';
import algoliasearch from 'algoliasearch/dist/algoliasearch.esm.browser.js';
import { stylesBase } from '../../static/styles.js';
import { svgSearch } from '../../static/svgs.js';

class DocsSearch extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        section {
          width: 80vw;
        }

        @media only screen and (min-width: 768px) {
          section {
            width: 50vw;
          }
        }

        :host([has-searched]) section {
          border-radius: 0.4rem;
          background-color: var(--fds-color--white);
        }

        a {
          text-decoration: none;
        }

        p {
          margin: 0.5rem 0;
          font-size: var(--fds-type__size--body2);
          color: var(--fds-color--black);
        }

        h2 {
          margin: 0;
          color: var(--kemet-color-primary);
          font-size: var(--fds-type__size--title3);
        }

        form {
          position: relative;
        }

        form input[type="text"] {
          padding-left: 5rem;
          border: 0;
        }

        form svg {
          position: absolute;
          top: 50%;
          left: 1rem;
          width: 32px;
          height: 32px;
          transform: translateY(-50%);
        }

        form circle,
        form line {
          stroke: var(--fds-color--black)
        }

        .articles {
          padding-top: 1rem;
          text-align: left;
          max-height: 45vh;
          overflow: auto;
        }

        article {
          padding: 2rem;
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
      hits: {
        type: Array,
      },
      hasSearched: {
        type: Boolean,
        reflect: true,
        attribute: 'has-searched'
      },
      currentPage: {
        type: Number
      },
      totalPages: {
        type: Number
      }
    }
  }

  constructor() {
    super();

    this.baseurl = '';
    this.hits = [];
    this.hasSearched = false;
    this.currentPage = 0;
  }

  render() {
    return html`
      <section>
        <form>
          <input
            type="text"
            placeholder="Search the docs."
            @keydown=${(event) => this.handleSearch(event)}
            @blur=${(event) => this.handleSearch(event)}
          />
          ${svgSearch}
        </form>
        <div class="articles">
          ${this.makePosts()}
        </div>
      </section>
    `;
  }

  handleSearch(event) {
    if (event.type === 'submit') {
      event.preventDefault();
    }

    const searchTerm = this.shadowRoot.querySelector('form input').value;
    const client = algoliasearch('XLA1JBHK2M', 'c9b7778aec95c0b02b84c2f7db46accb');
    const index = client.initIndex('prod_KEMETUIDOCS');
    const attributes = [
      'headings',
      'content',
      'author',
      'title',
      'tags',
      'type',
      'date',
      'url'
    ];

    index.search(searchTerm, {
      attributesToRetrieve: attributes,
      hitsPerPage: 99,
      page: this.currentPage
    }).then((data) => {
      this.totalPages = data.nbPages;

      if (searchTerm.length > 1) {
        this.hasSearched = true;
        this.hits = data.hits;
      } else {
        this.hasSearched = false;
        this.hits = [];
      }
    });
  }

  makePosts() {
    if (this.hits.length > 0) {
      return this.hits.map((hit) =>
        html`
          <article>
            <a href=${hit.url}>
              <h2>${hit.title}</h2>
              <p>${hit.content}</p>
            </a>
          </article>
        `
      );
    }

    if (this.hasSearched) {
      return html`<p>What was that? Try searching again.</p>`;
    }

    return null;
  }
}

customElements.define('docs-search', DocsSearch);

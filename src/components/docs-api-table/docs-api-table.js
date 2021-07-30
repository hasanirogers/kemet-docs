import { LitElement, css, html } from 'lit';
import { stylesBase } from '../../static/styles.js';

class DocsAPITable extends LitElement {
  static get styles() {
    return [
      stylesBase,
      css`
        :host {
          display: block;
        }

        section {
          padding: 2rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          box-shadow: var(--docs-box-shadow);
          background: var(--docs-code-background);
        }

        td {
          border: 1px solid var(--kemet-color-black-25);
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
      component: {
        type: String,
      },
      componentData: {
        type: Object
      },
      customElements: {
        type: Object
      }
    }
  }

  constructor() {
    super();

    this.baseurl = '/';
    this.component = 'kemet-accordion';
    this.componentData = {};
    this.customElements = {};
  }

  firstUpdated() {
    this.getCustomElements();
  }

  render() {
    return html`
      <section>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3"><b>Properties</b></td>
            </tr>
            ${this.makeProperties()}
            <tr>
              <td colspan="3"><b>Slots</b></td>
            </tr>
            ${this.makeSlots()}
            <tr>
              <td colspan="3"><b>Events</b></td>
            </tr>
            ${this.makeEvents()}
            <tr>
              <td colspan="3"><b>Methods</b></td>
            </tr>
            ${this.makeMethods()}
            <tr>
              <td colspan="3"><b>CSS</b></td>
            </tr>
            ${this.makeCSS()}
          </tbody>
        </table>
      </section>
    `;
  }

  makeProperties() {
    const propertiesData = this.componentData.properties || [];

    if (propertiesData.length > 0) {
      const properties = this.componentData.properties.map((property) => html`
          <tr>
            <td>${property.name}</td>
            <td>${property.description}<div><em>${property.type}</em></div></td>
            <td>${property.default}</td>
          </tr>
        `);

      return properties;
    }

    return null;
  }

  makeSlots() {
    const slotsData = this.componentData.slots || [];

    if (slotsData.length > 0) {
      const slots = this.componentData.slots.map((slot) => {
        const slotName = slot.name === '' ? 'default' : slot.name;

        return html`
          <tr>
            <td>${slotName}</td>
            <td colspan="2">${slot.description}</td>
          </tr>
        `;
      });

      return slots;
    }

    return html`
      <tr>
        <td colspan="3">
          This component has no slots.
        </td>
      </tr>
    `;
  }

  makeEvents() {
    const eventData = this.componentData.events || [];

    if (eventData.length > 0) {
      const events = this.componentData.events.map((event) => html`
          <tr>
            <td>${event.name}</td>
            <td colspan="2">${event.description}</td>
          </tr>
        `);

      return events;
    }

    return html`
      <tr>
        <td colspan="3">
          This component has no events.
        </td>
      </tr>
    `;
  }

  makeMethods() {
    const methodData = this.componentData.methods || [];

    if (methodData.length > 0) {
      const methods = this.componentData.methods.map((method) => html`
          <tr>
            <td>${method.name}</td>
            <td colspan="2">${method.description}</td>
          </tr>
        `);

      return methods;
    }

    return html`
      <tr>
        <td colspan="3">
          This component has no methods.
        </td>
      </tr>
    `;
  }

  makeCSS() {
    const cssData = this.componentData.cssProperties || [];

    if (cssData.length > 0) {
      const cssProperties = this.componentData.cssProperties.map((cssProperty) => html`
          <tr>
            <td>${cssProperty.name}</td>
            <td>${cssProperty.description}</td>
            <td>${cssProperty.default}</td>
          </tr>
        `);

      return cssProperties;
    }

    return html`
      <tr>
        <td colspan="3">
          This component has no css properties.
        </td>
      </tr>
    `;
  }

  getComponentData(componentName, tags) {
    tags.forEach((tag) => {
      if (tag.name === componentName) {
        this.componentData = tag;
      }
    });
  }

  async getCustomElements() {
    const customElements = await fetch(`https://unpkg.com/kemet-ui@latest/custom-elements.json`)
      .then(response => response.json());

    this.getComponentData(this.component, customElements.tags);
  }
}

customElements.define('docs-api-table', DocsAPITable);

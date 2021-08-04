---
layout: default
slug: modal
title: "Modal | Kemet UI"
permalink: /components/modal/
---

# Modal

The Modal overlays the window with content and has an optional close button.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-modal.js'
import 'kemet-ui/dist/components/kemet-modal-close.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-modal.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-modal-close.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-modal effect="[your-effect]">
  <div>
    <p>Your modal contents here.</p>
    <kemet-modal-close>
      Your close button here.
    </kemet-modal-close>
  </div>
</kemet-modal>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Modal on Storybook](https://storybook.kemet.dev/?path=/story/components-kemet-modal--modal)


{:kemet-margin-bottom="tiny:normal"}
## Demo

Note that the styles in this demo are so that the Modal works within the content of the demo. You will not need these styles.

<docs-showcase>
<main id="kemet-modal-demo">
  <script>
    const kemetModalDemoHasCloseOpen = () => {
      const modal = document.getElementById('kemet-modal-demo-has-close');
      modal.opened = true;
    }
  </script>
  <docs-button onclick="kemetModalDemoHasCloseOpen()">
    Open Modal
  </docs-button>
  <kemet-modal id="kemet-modal-demo-has-close" effect="super-scaled">
    <div class="content">
      <h2>Lorem ipsum dolor</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius porta libero, 
        ut lobortis enim lobortis eu. Proin dapibus enim et lobortis porttitor. Etiam lobortis 
        urna ut iaculis sodales. Ut accumsan, justo ut auctor tempus, lacus massa sodales tortor, 
        vel interdum felis tortor ut nibh. Maecenas elementum cursus auctor. Aliquam vel mauris at 
        ipsum euismod varius. Phasellus eget sapien risus. Proin nec leo egestas, vulputate orci 
        non, varius felis.
      </p>
      <kemet-modal-close>
        <docs-button reverse>Close Me</docs-button>
      </kemet-modal-close>
    </div>
  </kemet-modal>
</main>
<style>
  #kemet-modal-demo {
    perspective: 10px;
    min-height: 480px;
  }
  #kemet-modal-demo kemet-modal {
    width: 100%;
  }
  #kemet-modal-demo ::part(content) {
    margin: 2rem;
  }
</style>
</docs-showcase>


## API

### &lt;kemet-modal&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-modal"></docs-api-table>

### &lt;kemet-modal-close&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-modal-close"></docs-api-table>

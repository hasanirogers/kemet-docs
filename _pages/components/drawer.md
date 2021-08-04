---
layout: default
slug: drawer
title: "Drawer | Kemet UI"
permalink: /components/drawer/
---

# Drawer

The Drawer contains an off-screen navigation pane and supports multiple positions and effects when introducing the pane into the screen.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-drawer.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-drawer.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-drawer effect="[choose-an-effect]" side="[choose-a-side]">
  <nav slot="navigation">
    <!-- your navigation markup here -->
  </nav>
  <section slot="content">
    <!-- your content markup here -->
  </section>
</kemet-drawer>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Drawer on Storybook](https://storybook.kemet.dev/?path=/story/components-kemet-drawer--drawer)


{:kemet-margin-bottom="tiny:normal"}
## Demo

<docs-showcase>
<main id="kemet-drawer-demo">
  <script>
    const kemetDrawerDemoOpen = () => {
      const drawer = document.querySelector('#kemet-drawer-demo kemet-drawer');
      drawer.opened = true;
    }
    const kemetDrawerDemoClose = () => {
      const drawer = document.querySelector('#kemet-drawer-demo kemet-drawer');
      drawer.opened = false;
    }
  </script>
  <kemet-drawer effect="slide" side="left" overlay>
    <nav slot="navigation">
      <docs-button onclick="kemetDrawerDemoClose()">
        Close Drawer
      </docs-button>
    </nav>
    <section slot="content">
      <docs-button onclick="kemetDrawerDemoOpen()">
        Open Drawer
      </docs-button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius porta libero, 
        ut lobortis enim lobortis eu. Proin dapibus enim et lobortis porttitor. Etiam lobortis 
        urna ut iaculis sodales. Ut accumsan, justo ut auctor tempus, lacus massa sodales tortor, 
        vel interdum felis tortor ut nibh. Maecenas elementum cursus auctor. Aliquam vel mauris at 
        ipsum euismod varius. Phasellus eget sapien risus. Proin nec leo egestas, vulputate orci 
        non, varius felis.
      </p>
    </section>
  </kemet-drawer>
</main>
<style>
  #kemet-drawer-demo {
    perspective: 10px;
    overflow-x: hidden;
  }
  #kemet-drawer-demo [slot="content"] {
    min-height: 0;
  }
  #kemet-drawer-demo ::part(pusher) {
    height: 320px;
  }
</style>
</docs-showcase>

## API

### &lt;kemet-drawer&gt;

<docs-api-table base-url="{{ site.baseurl }}" component="kemet-drawer"></docs-api-table>

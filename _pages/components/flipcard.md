---
layout: default
slug: flipcard
title: "Flipcard | Kemet UI"
permalink: /components/flipcard
---

# Flipcard

The Flipcard has a front and back side with a trigger element that flips between them.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-flipcard.js'
import 'kemet-ui/dist/components/kemet-flipcard-trigger.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-flipcard.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-flipcard-trigger.js" type="module"></script>

```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-flipcard>
  <div slot="front">
    <p>This is the front of the card.</p>
  </div>
  <div slot="back">
    <p>This is the back of the card.</p>
  </div>
</kemet-flipcard>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Flipcard on Storybook](https://storybook.kemet.dev/?path=/story/components-kemet-flipcard--flipcard)


{:kemet-margin-bottom="tiny:normal"}
## Demo

### Fixed Dimensions
<docs-showcase>
<kemet-flipcard style="width:320px; height:240px;">
  <div slot="front">
    <p>This card has a fixed height and width.</p>
    <kemet-flipcard-trigger>
      <button>Flip Me</button>
    </kemet-flipcard-trigger>
  </div>
  <div slot="back">
    <kemet-flipcard-trigger>
      <button>Flip me back!</button>
    </kemet-flipcard-trigger>
  </div>
</kemet-flipcard>
</docs-showcase>

### Measured Height
<docs-showcase caption="Note: the .full-image class styles the a trigger who's whole content is an image.">
<kemet-flipcard measure>
  <div slot="front">
    <p>This card will automatically adjust its height to match the tallest content.</p>
    <kemet-flipcard-trigger>
      <button>Flip Me</button>
    </kemet-flipcard-trigger>
  </div>
  <kemet-flipcard-trigger slot="back" class="full-image">
    <img src="https://via.placeholder.com/1980x1080" alt="a placeholder" />
  </kemet-flipcard-trigger>
</kemet-flipcard>
</docs-showcase>

### Flip On Hover
<docs-showcase>
<kemet-flipcard measure flip-on-hover axis="vertical">
  <div slot="front">
    <p>This card will flip on hover or focus.</p>
  </div>
  <div slot="back">
    <p>It also flips vertically.</p>
  </div>
</kemet-flipcard>
</docs-showcase>


## API

### &lt;kemet-flipcard&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-flipcard"></docs-api-table>

### &lt;kemet-flipcard-trigger&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-flipcard-trigger"></docs-api-table>

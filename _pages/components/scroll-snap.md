---
layout: default
slug: scroll-snap
title: "Scroll Snap | Kemet UI"
permalink: /components/scroll-snap/
---

# Scroll Snap

The Scroll Snap is a responsive slider that snaps to each slide.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-scroll-snap.js'
import 'kemet-ui/dist/components/kemet-scroll-snap-slide.js'
import 'kemet-ui/dist/components/kemet-scroll-snap-paginator.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-scroll-snap.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-scroll-snap-slide.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-scroll-snap-paginator.js" type="module"></script>


```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-scroll-snap>
  <div slot="slides">
    <kemet-scroll-snap-slide>[your content]</kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>[your content]</kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>[your content]</kemet-scroll-snap-slide>
  </div>
  <div slot="pagination">
    <kemet-scroll-snap-paginator></kemet-scroll-snap-paginator>
  </div>
</kemet-scroll-snap>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Scroll Snap on Storybook](https://storybook.kemet.dev/?path=/docs/components-kemet-scroll-snap--scroll-snap)


{:kemet-margin-bottom="tiny:normal"}
## Demo

### Horizontal
<docs-showcase>
<kemet-scroll-snap>
  <div slot="slides">
    <kemet-scroll-snap-slide>
      <h3>Heading 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, arcu non dapibus posuere, leo dolor bibendum risus, ut vulputate ex neque vitae tellus. Vivamus dolor mi, tempus nec lectus sit amet, consectetur lobortis sapien. Phasellus ultrices felis sit amet pretium tincidunt. Praesent scelerisque bibendum pretium. Suspendisse id placerat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae rutrum arcu, sit amet imperdiet velit. Nullam felis tortor, hendrerit eu sodales eu, euismod non enim.</p>
      <img src="https://via.placeholder.com/1920x1080" alt="A Placeholder" style="max-width:100%">
    </kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>
      <h3>Heading 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, arcu non dapibus posuere, leo dolor bibendum risus, ut vulputate ex neque vitae tellus. Vivamus dolor mi, tempus nec lectus sit amet, consectetur lobortis sapien. Phasellus ultrices felis sit amet pretium tincidunt. Praesent scelerisque bibendum pretium. Suspendisse id placerat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae rutrum arcu, sit amet imperdiet velit. Nullam felis tortor, hendrerit eu sodales eu, euismod non enim.</p>
      <img src="https://via.placeholder.com/1920x1080" alt="A Placeholder" style="max-width:100%">
    </kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>
      <h3>Heading 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, arcu non dapibus posuere, leo dolor bibendum risus, ut vulputate ex neque vitae tellus. Vivamus dolor mi, tempus nec lectus sit amet, consectetur lobortis sapien. Phasellus ultrices felis sit amet pretium tincidunt. Praesent scelerisque bibendum pretium. Suspendisse id placerat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae rutrum arcu, sit amet imperdiet velit. Nullam felis tortor, hendrerit eu sodales eu, euismod non enim.</p>
      <img src="https://via.placeholder.com/1920x1080" alt="A Placeholder" style="max-width:100%">
    </kemet-scroll-snap-slide>
  </div>
  <div slot="pagination">
    <kemet-scroll-snap-paginator></kemet-scroll-snap-paginator>
  </div>
</kemet-scroll-snap>
</docs-showcase>

### Vertical
<docs-showcase>
<kemet-scroll-snap axis="vertical" style="height:480px;">
  <div slot="slides">
    <kemet-scroll-snap-slide>
      <h3>Heading 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, arcu non dapibus posuere, leo dolor bibendum risus, ut vulputate ex neque vitae tellus. Vivamus dolor mi, tempus nec lectus sit amet, consectetur lobortis sapien. Phasellus ultrices felis sit amet pretium tincidunt. Praesent scelerisque bibendum pretium. Suspendisse id placerat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae rutrum arcu, sit amet imperdiet velit. Nullam felis tortor, hendrerit eu sodales eu, euismod non enim.</p>
      <img src="https://via.placeholder.com/1920x1080" alt="A Placeholder" style="max-width:100%">
    </kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>
      <h3>Heading 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, arcu non dapibus posuere, leo dolor bibendum risus, ut vulputate ex neque vitae tellus. Vivamus dolor mi, tempus nec lectus sit amet, consectetur lobortis sapien. Phasellus ultrices felis sit amet pretium tincidunt. Praesent scelerisque bibendum pretium. Suspendisse id placerat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae rutrum arcu, sit amet imperdiet velit. Nullam felis tortor, hendrerit eu sodales eu, euismod non enim.</p>
      <img src="https://via.placeholder.com/1920x1080" alt="A Placeholder" style="max-width:100%">
    </kemet-scroll-snap-slide>
    <kemet-scroll-snap-slide>
      <h3>Heading 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, arcu non dapibus posuere, leo dolor bibendum risus, ut vulputate ex neque vitae tellus. Vivamus dolor mi, tempus nec lectus sit amet, consectetur lobortis sapien. Phasellus ultrices felis sit amet pretium tincidunt. Praesent scelerisque bibendum pretium. Suspendisse id placerat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae rutrum arcu, sit amet imperdiet velit. Nullam felis tortor, hendrerit eu sodales eu, euismod non enim.</p>
      <img src="https://via.placeholder.com/1920x1080" alt="A Placeholder" style="max-width:100%">
    </kemet-scroll-snap-slide>
  </div>
  <div slot="pagination">
    <kemet-scroll-snap-paginator icon="—" ></kemet-scroll-snap-paginator>
  </div>
</kemet-scroll-snap>
<style>
  html[kemet-scroll-snap-axis=vertical] {
    overflow: auto;
  }
</style>
</docs-showcase>


## API

### &lt;kemet-scroll-snap&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-scroll-snap"></docs-api-table>

### &lt;kemet-scroll-snap-slide&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-scroll-snap-slide"></docs-api-table>

### &lt;kemet-scroll-snap-paginator&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-scroll-snap-paginator"></docs-api-table>

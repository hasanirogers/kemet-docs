---
layout: default
slug: carousel
title: "Carousel | Kemet UI"
permalink: /components/carousel/
---

# Carousel

The Carousel is a collection of components that allow slides to be shown.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-carousel.js'
import 'kemet-ui/dist/components/kemet-carousel-slide.js'
import 'kemet-ui/dist/components/kemet-carousel-link.js'
import 'kemet-ui/dist/components/kemet-carousel-next.js'
import 'kemet-ui/dist/components/kemet-carousel-prev.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-carousel.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-carousel-slide.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-carousel-link.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-carousel-next.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-carousel-prev.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-carousel>
  <div slot="slides">
    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
  </div>
  <div slot="pagination">
    <kemet-carousel-prev>Prev</kemet-carousel-prev>
    <kemet-carousel-link slide="0">1</kemet-carousel-link>
    <kemet-carousel-link slide="1">2</kemet-carousel-link>
    <kemet-carousel-link slide="2">3</kemet-carousel-link>
    <kemet-carousel-next>Next</kemet-carousel-next>
  </div>
</kemet-carousel>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Carousel on Storybook](https://storybook.kemet.dev/?path=/story/components-kemet-carousel--carousel)


{:kemet-margin-bottom="tiny:normal"}
## Demo

The carousel comes with many elements with plenty of properties that adds complexity to its usage. So here are some examples demonstrating how to use it.

### Basic

You can use `kemet-carousel-link`, `kemet-carousel-prev`, and `kemet-carousel-next` to create pagination as you please. Use the slide property with `kemet-carousel-link` to link to a slide. Notice how it's zero indexed.

<docs-showcase>
<kemet-carousel>
  <div slot="slides">
    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
  </div>
  <div slot="pagination">
    <kemet-carousel-prev>Prev</kemet-carousel-prev>
    <kemet-carousel-link slide="0">1</kemet-carousel-link>
    <kemet-carousel-link slide="1">2</kemet-carousel-link>
    <kemet-carousel-link slide="2">3</kemet-carousel-link>
    <kemet-carousel-next>Next</kemet-carousel-next>
  </div>
</kemet-carousel>
</docs-showcase>

### Pagination 

You can change the position of the paginator with the pagination property. Possible values are: top, right, bottom, left. Default is bottom.

<docs-showcase>
<kemet-carousel pagination="top">
  <div slot="slides">
    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
  </div>
  <div slot="pagination">
    <kemet-carousel-prev>Prev</kemet-carousel-prev>
    <kemet-carousel-link slide="0">1</kemet-carousel-link>
    <kemet-carousel-link slide="1">2</kemet-carousel-link>
    <kemet-carousel-link slide="2">3</kemet-carousel-link>
    <kemet-carousel-next>Next</kemet-carousel-next>
  </div>
</kemet-carousel>
</docs-showcase>

### Slideshow

You can use the slideshow property to auto-play the slides. In this example a slide will play every 3 seconds. Slideshow is disabled if set to 0 seconds, which is the default.

<docs-showcase>
<kemet-carousel slideshow="3">
  <div slot="slides">
    <kemet-carousel-slide>Slide One</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
    <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
  </div>
</kemet-carousel>
</docs-showcase>

### Transitions

You can set a transition on each slide. Here we fade the slides. Possible values are: horizontal, vertical, and fade. Default is horizontal.

<docs-showcase>
<kemet-carousel slideshow="3">
  <div slot="slides">
    <kemet-carousel-slide transition="fade">Slide One</kemet-carousel-slide>
    <kemet-carousel-slide transition="fade">Slide Two</kemet-carousel-slide>
    <kemet-carousel-slide transition="fade">Slide Three</kemet-carousel-slide>
  </div>
</kemet-carousel>
</docs-showcase>

### Disabling

`kemet-carousel-link`, `kemet-carousel-prev`, and `kemet-carousel-next` all support the disabled property. Use this to control when and how a user can navigate to a slide. In this example the next button has been disabled. You can remove the disabled property once the button is clicked.

<docs-showcase>
<div>
  <script>
    const kemetCarouselDisabledDemo = () => {
      const next = document.getElementById('kemet-carousel-disabled-demo');
      next.disabled = false;
    };
  </script>
  <kemet-carousel>
    <div slot="slides">
      <kemet-carousel-slide>
        <button onclick="kemetCarouselDisabledDemo()">Click to enable next.</button>
      </kemet-carousel-slide>
      <kemet-carousel-slide>Slide Two</kemet-carousel-slide>
      <kemet-carousel-slide>Slide Three</kemet-carousel-slide>
    </div>
    <div slot="pagination">
      <kemet-carousel-next id="kemet-carousel-disabled-demo" disabled>Next</kemet-carousel-next>
    </div>
  </kemet-carousel>
</div>
</docs-showcase>






## API

### &lt;kemet-carousel&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-carousel"></docs-api-table>

### &lt;kemet-carousel-slide&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-carousel-slide"></docs-api-table>

### &lt;kemet-carousel-link&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-carousel-link"></docs-api-table>

### &lt;kemet-carousel-next&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-carousel-next"></docs-api-table>

### &lt;kemet-carousel-prev&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-carousel-prev"></docs-api-table>

---
layout: default
slug: accordion
title: "Accordion | Kemet UI"
permalink: /components/accordion/
---

# Accordion

The Accordion expands or collapses content in a panel with a trigger element.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-accordion.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-accordion.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-accordion>
  <a slot="trigger">Trigger</a>
  <div slot="panel">Panel content goes here.</div>
</kemet-accordion>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Accordion on Storybook](https://storybook.kemet.dev/?path=/story/components-kemet-accordion--single)


{:kemet-margin-bottom="tiny:normal"}
## Demo

<docs-showcase>
<div>
  <kemet-accordion>
    <div slot="trigger">
      <span>Accordion One</span>
      <span class="plus"></span>
      <span class="minus"></span>
    </div>
    <div slot="panel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat 
      elementum lectus. Vestibulum laoreet faucibus odio nec sollicitudin. 
      Donec at augue ut ex efficitur pellentesque. Nulla vitae urna ut arcu 
      venenatis tempor. Phasellus a turpis in tellus consectetur finibus. 
      Fusce consequat id nibh non aliquam. Mauris non lacus semper, consequat 
      mauris congue, rhoncus dolor. Sed malesuada risus risus. Morbi quis 
      augue sem.
    </div>
  </kemet-accordion>
  <kemet-accordion>
    <div slot="trigger">
      <span>Accordion Two</span>
      <span class="plus"></span>
      <span class="minus"></span>
    </div>
    <div slot="panel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat 
      elementum lectus. Vestibulum laoreet faucibus odio nec sollicitudin. 
      Donec at augue ut ex efficitur pellentesque. Nulla vitae urna ut arcu 
      venenatis tempor. Phasellus a turpis in tellus consectetur finibus. 
      Fusce consequat id nibh non aliquam. Mauris non lacus semper, consequat 
      mauris congue, rhoncus dolor. Sed malesuada risus risus. Morbi quis 
      augue sem.
    </div>
  </kemet-accordion>
  <kemet-accordion>
    <div slot="trigger">
      <span>Accordion Three</span>
      <span class="plus"></span>
      <span class="minus"></span>
    </div>
    <div slot="panel">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat 
      elementum lectus. Vestibulum laoreet faucibus odio nec sollicitudin. 
      Donec at augue ut ex efficitur pellentesque. Nulla vitae urna ut arcu 
      venenatis tempor. Phasellus a turpis in tellus consectetur finibus. 
      Fusce consequat id nibh non aliquam. Mauris non lacus semper, consequat 
      mauris congue, rhoncus dolor. Sed malesuada risus risus. Morbi quis 
      augue sem.
    </div>
  </kemet-accordion>
</div>
</docs-showcase>

## API

### &lt;kemet-accordion&gt;

<docs-api-table base-url="{{ site.baseurl }}" component="kemet-accordion"></docs-api-table>

---
layout: default
slug: tabs
title: "Tabs | Kemet UI"
permalink: /components/tabs/
---

# Tabs

The Tabs displays panels of information based on links the user interacts with. 

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-tabs.js'
import 'kemet-ui/dist/components/kemet-tab.js'
import 'kemet-ui/dist/components/kemet-tab-panel.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-tabs.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-tab.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-tab-panel.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-tabs selected="one">
  <div slot="links" role="tablist" aria-label="Tabs">
    <kemet-tab link="one">One</kemet-tab>
    <kemet-tab link="two">Two</kemet-tab>
    <kemet-tab link="three">Three</kemet-tab>
  </div>
  <section slot="panels">
    <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
    <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
    <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
  </section>
</kemet-tabs>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Tabs on Storybook](https://storybook.kemet.dev/?path=/story/components-kemet-tabs--select-by-name)


{:kemet-margin-bottom="tiny:normal"}
## Demo

### Horizontal
<docs-showcase>
<kemet-tabs class="horizontal" panel-effect="slide">
  <div slot="links" role="tablist" aria-label="Tabs">
    <kemet-tab link="one">One</kemet-tab>
    <kemet-tab link="two">Two</kemet-tab>
    <kemet-tab link="three">Three</kemet-tab>
  </div>
  <section slot="panels">
    <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
    <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
    <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
  </section>
</kemet-tabs>
</docs-showcase>

### Vertical
<docs-showcase>
<kemet-tabs selected="two" class="vertical" panel-effect="fade">
  <div slot="links" role="tablist" aria-label="Tabs">
    <kemet-tab link="one">One</kemet-tab>
    <kemet-tab link="two">Two</kemet-tab>
    <kemet-tab link="three">Three</kemet-tab>
  </div>
  <section slot="panels">
    <kemet-tab-panel panel="one">Panel One</kemet-tab-panel>
    <kemet-tab-panel panel="two">Panel Two</kemet-tab-panel>
    <kemet-tab-panel panel="three">Panel Three</kemet-tab-panel>
  </section>
</kemet-tabs>
</docs-showcase>


## API

### &lt;kemet-tabs&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-tabs"></docs-api-table>

### &lt;kemet-tab&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-tab"></docs-api-table>

### &lt;kemet-tabs&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-tab-panel"></docs-api-table>

---
layout: default
slug: popover
title: "Popover | Kemet UI"
permalink: /components/popover/
---

# Popover

The Popover displays an element in position of a trigger. Also acts as a tooltip.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-popover.js'
import 'kemet-ui/dist/components/kemet-popover-close.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-popover.js" type="module"></script>
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-popover-close.js" type="module"></script>

```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-popover>
  <button slot="trigger">Popover Trigger</button>
  <span slot="content">Your popover contents here. Supports HTML.</span>
</kemet-popover>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Popover on Storybook](https://storybook.kemet.dev/?path=/story/components-kemet-popover--popover)


{:kemet-margin-bottom="tiny:normal"}
## Demo

### Popover 
<docs-showcase>
<kemet-popover id="kemet-popover-demo" effect="fade">
  <strong slot="trigger">Hover Here</strong>
  <div slot="content">Popover content here.</div>
</kemet-popover>
<style>
  #kemet-popover-demo {
    --kemet-popover-width: 245%;
  }
</style>
</docs-showcase>

### Tooltip that fires on click
<docs-showcase caption="Notice that styles were added here. Popover does not make assumptions about how you want to style your content so the following styles were needed to get the demo look and feel.">
<div>
  <style>
    #kemet-popover-demo-tooltip {
      --kemet-popover-width: 320px;
    }
    #kemet-popover-demo-tooltip img {
      max-width: 100%;
    }
    #kemet-popover-demo-tooltip kemet-popover-close {
      float: right;
    }
  </style>
  <kemet-popover id="kemet-popover-demo-tooltip" effect="fade" fire-on="click" tooltip click-outside>
    <strong slot="trigger">Click Here</strong>
    <div slot="content">
      <kemet-popover-close>&times;</kemet-popover-close>
      <h3>Heading</h3>
      <img kemet-margin-bottom="tiny:small" src="http://via.placeholder.com/1920x1080" alt="a placeholder">
      <docs-button reverse link="http://google.com">Google</docs-button>
    </div>
  </kemet-popover>
</div>
</docs-showcase>

## API

### &lt;kemet-popover&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-popover"></docs-api-table>

### &lt;kemet-popover-close&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-popover-close"></docs-api-table>

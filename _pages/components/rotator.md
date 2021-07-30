---
layout: default
slug: rotator
title: "Rotator | Kemet UI"
permalink: /components/rotator
---

# Rotator

The Rotator rotates through an array of text and displays them individually. Supports HTML. 

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-rotator.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-rotator.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-rotator rotation-speed="5" messages='["my", "text", "here"]'></kemet-rotator>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Rotator on Storybook](https://storybook.kemet.dev/?path=/docs/components-kemet-rotator--rotator)


{:kemet-margin-bottom="tiny:normal"}
## Demo

<docs-showcase>
<p>
  <kemet-rotator messages='["<a href=\"http://google.com\">HTML is supported</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Praesent ornare porta nulla.", "Nulla ipsum felis, aliquet nec nisl sit amet, suscipit facilisis massa."]'></kemet-rotator>
</p>
</docs-showcase>


## API

### &lt;kemet-rotator&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-rotator"></docs-api-table>

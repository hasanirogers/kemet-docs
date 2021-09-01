---
layout: default
slug: icon
title: "Icon | Kemet UI"
permalink: /components/icon/
---

# Icon

An element that represents an icon from a predefined set of open sourced icons.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-icon.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-icon.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-icon set="[open source icon set]" icon="[icon name]" size="[icon size]"></kemet-icon>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Icon on Storybook](https://storybook.kemet.dev/?path=/docs/components-kemet-icon--standard)


{:kemet-margin-bottom="tiny:normal"}
## Demo

### Bootstrap, Alarm
<docs-showcase>
<kemet-icon set="bootstrap" icon="alarm" size="63"></kemet-icon>
</docs-showcase>

### Font Awesome Brand, App Indicator
<docs-showcase>
<kemet-icon set="font-awesome-brand" icon="app-indicator" size="64"></kemet-icon>
</docs-showcase>

### Font Awesome Regular, Address Book
<docs-showcase>
<kemet-icon set="font-awesome-regular" icon="address-book" size="64"></kemet-icon>
</docs-showcase>

### Font Awesome Solid, Address Book
<docs-showcase>
<kemet-icon set="font-awesome-solid" icon="address-book" size="64"></kemet-icon>
</docs-showcase>


## API

### &lt;kemet-icon&gt;
<docs-api-table base-url="{{ site.baseurl }}" component="kemet-icon"></docs-api-table>

---
layout: layouts/default.njk
title: Kemet UI | Getting Started
permalink: 'getting-started/'
description: You can install Kemet UI via NPM or a CDN. You can also use Kemet UI in any JavaScript library. This guide shows you how.
---

# Getting Started

You can install Kemet UI via NPM or a CDN.

## NPM

Install the package with the following command: `npm install kemet-ui`. Once installed you can include the entire library with the following:

```javascript
// all components
import 'kemet-ui';

// required styles
import 'kemet-ui/dist/styles/kemet.base';

// if you want to use the styles core api, import these styles
import 'kemet-ui/dist/styles/kemet.core';

// if you want some basic styles applied to the components, import these styles
import 'kemet-ui/dist/styles/kemet.components';
```

## CDN

Include a script and/or link tag on your page to install via CDN. Make sure you set the type to module for the components.

```html
<script
  type="module"
  src="https://unpkg.com/kemet-ui@latest/dist/kemet-components.bundle.js"
></script>
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.base.css" rel="stylesheet" />
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.core.css" rel="stylesheet" />
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.components.css" rel="stylesheet" />
```

## Using Components

Kemet UI components are Web Components. Using a Web Component in your application is as simple as writing HTML for most use cases. Once you've installed Kemet UI write the component in your app like the following:

```html
<kemet-component property="value"> Some content goes here. </kemet-component>
```

Each component tag name and properties/attributes will vary. Be sure to checkout the documentation for each component for specifics.

## Working with Libraries or Frameworks

Every library is different. Be sure to checkout the Integrations section off to the left for more details. The general rule is that you'll need to know how to bind properties to elements. In Vue, for example, you bind properties like so:

```html
<kemet-rotator v-bind:messages.prop="messages"></kemet-rotator>
```

You'll also need to know how to work with events. In Angular for example, you use `hostListener`. Checkout out [Angular Integrations](/integrations/angular/) for more details.

## Docs

[The docs are written in Storybook](https://storybook.kemet.dev). Storybook allows you to configure components and generate the necessary code to include them.

## Light and Dark Mode (Polarity)

Kemet UI ships with the concept of "polarity". This is slightly different from light and dark mode. But it's related. Polarity refers the context of which a component sits on. A "light" polarity means that the component is assumed to be sitting on a light back around. A "dark" polarity means that the component is assumed to be sitting on a dark background.

Kemet UI controls for polarity by adding an attribute of polarity to the `<html>` tag. This attribute is set to "light" by default. To use "dark mode", set the attribute to "dark".

```html
<html polarity="dark">
  ...
</html>
```

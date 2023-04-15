---
layout: layouts/default.njk
title: Kemet UI | Getting Started
permalink: "getting-started/"
description: You can install Kemet UI via NPM or a CDN. You can also use Kemet UI in any JavaScript library. This guide shows you how.
---

# Getting Started


You can install Kemet UI via NPM or a CDN.

## NPM

Install the package with the following command: `npm install kemet-ui`. Once installed you can include the entire library with the following:

```javascript
import 'kemet-ui'; // all components
import 'kemet-ui/dist/styles/kemet.base'; // required styles 
import 'kemet-ui/dist/styles/kemet.core'; // if you want to use the styles core api, import these styles
import 'kemet-ui/dist/styles/kemet.components'; // if you want some basic styles applied to the components, import these styles
```

## CDN

Include a script and/or link tag on your page to install via CDN. Make sure you set the type to module for the components.

```html
<script type="module" src="https://unpkg.com/kemet-ui@latest/dist/kemet-components.bundle.js"></script>
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.base.css" rel="stylesheet">
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.core.css" rel="stylesheet">
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.components.css" rel="stylesheet">
```

## Using Components

Kemet UI components are Web Components. Using a Web Component in your application is as simple as writing HTML for most use cases. Once you've installed Kemet UI write the component in your app like the following:

```html
<kemet-component property="value">
  Some content goes here.
</kemet-component>
```

Each component tag name and properties/attributes will vary. Be sure to checkout the documentation for each component for specifics.


## Working with Third Party Libraries

### React

[React doesn't play nice with Web Components](https://custom-elements-everywhere.com/#react). Fortunately you can use a wrapper to get Kemet UI components to work in React. For more information checkout the [React](libraries/react/) guide.

### Angular

You'll need to configure custom elements schema on your app's ngModule to use Web Components. It's super easy. Read the [Angular](/libraries/angular) guide for more info.

### Vue

Using Web Components in Vue is as simple as writing standard html. Just be sure to use `v-bind` when using properties. For example:

```html
<kemet-rotator v-bind:messages.prop="messages"></kemet-rotator>
```

## Themes

Kemet UI ships with two themes. The default is `light` and can be switched to `dark`. To set the theme, use the `theme` attribute on the `html` tag like so:

```html
<html theme="dark">...</html>
```

Theme-ing works via css custom properties. The `dark` theme overwrites default css custom properties. Since Kemet UI is a Blueprint System, this has been written an un-opinionated way about the design of the properties. You can write your own theme by setting the `theme` attribute to your theme name. You then can write a `html` selector with your properties and values like so:

```css
[theme='my-theme'] {
  --kemet-color-text: black; /* this is general text color */
  --kemet-color-foreground: red; /* this is the value components default their front color to, like the text on a button */
  --kemet-color-background: white; /* this is the value component default their back color to, like bg color of a button */
  --my-theme-background: blue;
  --my-theme-button-color: orange;
}
```

You can make up as many properties as you need. You can even have components default to different colors. For example, to make a button orange by default, write:

```css
kemet-button {
  --kemet-button-background-color: var(--my-theme-button-color);
}
```

The sky is the limit on what you can do. As a Blueprint system Kemet UI allows you to craft the designs you want. See [colors](https://storybook.kemet.dev/?path=/docs/styles-colors--documentation) in the docs for more info on what colors are available by default.


## Docs

[The docs are written in Storybook](https://storybook.kemet.dev). Storybook allows you to configure components and generate the necessary code to include them.

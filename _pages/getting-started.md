---
layout: default
slug: getting-started
title: "Getting Started"
permalink: /getting-started
---

# Getting Started


You can install Kemet UI via NPM or a CDN.

## NPM

Install the package with the following command: `npm install kemet-ui`. Once installed you can include the entire library with the following:

```javascript
import 'kemet-ui'; // all components
import 'kemet-ui/dist/components/kemet-the-name-of-component.js'; // specific component
import 'kemet-ui/dist/styles/kemet.core.css'; // core styles
import 'kemet-ui/dist/styles/kemet.components.css'; // component styles
```

## CDN

Include a script and/or link tag on your page to install via CDN. Make sure you set the type to module for the components.

```html
<script type="module" src="https://unpkg.com/kemet-ui@latest/dist/kemet-components.min.js"></script>
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.core.css" rel="stylesheet">
<link href="https://unpkg.com/kemet-ui@latest/dist/styles/kemet.components.css" rel="stylesheet">
```

## Usage

Kemet UI components are Web Components. New to Web Components? Using a Web Component in your application is as simple as writing HTML for most use cases. Once you've installed Kemet UI write the component in your app like the following:

```html
<kemet-component property="value">
  Some content goes here.
</kemet-component>
```

Each component tag name and attributes will vary. Be sure to checkout the documentation for each component for specifics.


## Frameworks

### React

[React doesn't play nice with Web Components](https://custom-elements-everywhere.com/#react). Fortunately you can use a wrapper to get Kemet UI components to work in React. For more information checkout the [Wrapping Web Components for React]({{ site.baseurl }}/guides/using-wrappers-react) guide.

### Angular

You'll need to configure custom elements schema on your app's ngModule to use Web Components. It's super easy. Read the [Web Components with Angular]({{ site.baseurl }}/guides/web-components-with-angular) guide for more info.

### Vue

Using Web Components in Vue is as simple as writing standard html. Just be sure to use `v-bind` when using properties. For example:

```html
<kemet-rotator v-bind:messages.prop="messages"></kemet-rotator>
```


## Storybook

Storybook is a great way to learn how a component works. Every time a new version of Kemet UI is published Storybook is automatically updated. [Checkout Storybook](https://storybook.kemet.dev) and get a feel for each component's controls.

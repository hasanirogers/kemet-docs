---
layout: layouts/default.njk
title: Kemet UI | Using Web Components in React
permalink: 'integrations/react/'
description: React 19 and newer ships with out-of-box support for Web Components. Learns how to integrate them here.
---

# Using Web Components in React

React 19 finally ships with out of the box support for Web Components. This means that you can use Kemet UI components in React in react without wrappers.

## Reactbox

[Reactbox](https://stackblitz.com/~/github.com/hasanirogers/web-components-reactbox) is a React sandbox that demonstrates how to use Kemet UI components in React 19 and newer. Check it out.

{% iframe 'https://stackblitz.com/edit/web-components-reactbox?ctl=1&embed=1&file=src/App.tsx&view=editor', 'Kemet UI | Reactbox' %}

Notice that the components were simply imported then then the Web Component's API was simply used in the `App.tsx`. On line 15 you'll see an event.

```javascript
onkemet-drawer-opened={() => setIsDrawerOpened(true)}
```

The name of the event in Kemet UI is `kemet-drawer-opened`. In React 19 and newer, simply prepend `on` to your event name and work with them like you would regular synthetic React events like `onClick`.

**Note**: To get your editor to recognize the Web Component in JSX, see [Using JSX](/guides/using-jsx/).

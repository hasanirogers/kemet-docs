---
layout: layouts/default.njk
title: Kemet UI | Using Web Components with VUe
permalink: 'integrations/vue/'
description: Working with web components in Vue is simple. This guide will walk you through the process.
---

# Using Web Components with Vue

Vue has excellent support for Web Components. There is noting special needed to get Vue to support them.

## Vuebox

[Vuebox](https://stackblitz.com/~/github.com/hasanirogers/web-components-vuebox) is a Vue sandbox that demonstrates how to use Kemet UI components in Vue. Check it out.

{% iframe 'https://stackblitz.com/edit/web-components-vuebox?ctl=1&embed=1&file=src/App.vue&view=editor', 'Kemet UI | Vuebox' %}

Notice that everything is standard Vue code. The only other thing to note here is that the `vite.config.ts` files has code that allows the compiler to recognize Kemet UI Web Components. That's it.

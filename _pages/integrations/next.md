---
layout: layouts/default.njk
title: Kemet UI | Using Web Components with Next
permalink: 'integrations/next/'
description: Working with web components in an SSR framework like Next requires some build steps. But with this guide, we'll walk you through the process.
---

# Using Web Components with Next

Given the limitation of Web Components and SSR there are things you must consider while using Kemet UI in Next or any SSR framework. The primary thing you have to handle is building a `kemet.js` bundle and executing it as a script in the browser.

[Here you'll find a full read up on this strategy](https://blog.hasanirogers.me/2024/08/web-components-and-ssr-with-nextjs.html).

## Nextbox

[Nextbox](https://stackblitz.com/~/github.com/hasanirogers/web-components-nextbox) is a Next sandbox that demonstrates how to use Kemet UI components in Next. Check it out.

{% iframe 'https://stackblitz.com/edit/web-components-nextbox?ctl=1&embed=1&file=app/layouts/default.tsx&view=editor', 'Kemet UI | Nextbox' %}

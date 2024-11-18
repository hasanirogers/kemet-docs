---
layout: layouts/default.njk
title: Kemet UI | Using Web Components with Angular
permalink: 'integrations/angular/'
description: Working with web components in Angular is simple. This guide will walk you through the process.
---

# Using Web Components with Angular

Enabling Web Component in Angular is easy. The only thing you have to do is turn on `CUSTOM_ELEMENTS_SCHEMA`. After that, you can use Web Components like any other component.

## Angularbox

[Angularbox](https://stackblitz.com/~/github.com/hasanirogers/web-components-angularbox) is a Angular sandbox that demonstrates how to use Kemet UI components in Angular. Check it out.

{% iframe 'https://stackblitz.com/edit/web-components-angularbox?ctl=1&embed=1&file=src/index.tsx&view=editor', 'Kemet UI | Angularbox' %}

Notice that in `src/index.ts` we've imported `CUSTOM_ELEMENTS_SCHEMA` and used it in `@Component`.

```javascript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
...
@Component({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

That's it. You can now use the Web Component.

## Handling Custom Events in Angular

To handle events in Angular use `HostListener`. Simply give the first argument of HostListener the name of the event you want to listen to. You can [read more on HostListener](https://angular.dev/api/core/HostListener#) in the Angular docs.

```javascript
import { Component, HostListener } from '@angular/core';
import 'kemet-ui';
...
export class AppComponent  {
  @HostListener('kemet-modal-closed', ['$event.target'])
  onClose(modal) {
    console.log(modal);
    this.isDrawerOpened = false;
  }

  isDrawerOpened = false;

  openDrawer() {
    this.isDrawerOpened = true;
  }
}
```

The second argument simply captures the element that triggered the event (the modal) and we log it to the console just as an example of this.

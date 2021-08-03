---
layout: default
slug: web-components-with-angular
title: "Web Components with Angular"
date: 2021-08-02
---

# Web Components with Angular

Enabling Web Component in Angular is easy. The only thing you have to do is turn on `CUSTOM_ELEMENTS_SCHEMA` in your ngModule. After that, you can use Web Components like any other component. No wrappers needed. The following is an example of how to use `kemet-modal` in a Angular application.

<kemet-ratio>
  <iframe width="100%" height="100%" title="Kemet UI React Example" src="https://stackblitz.com/edit/kemet-angular-example?embed=1&file=src/app/app.module.ts&hideExplorer=1"></iframe>
</kemet-ratio>

Notice that in `app.module.ts` we've imported `CUSTOM_ELEMENTS_SCHEMA` and used it in `ngModule`.

```javascript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
...
@NgModule({
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

That's it. You can now use the Web Component.

## Handling Custom Events in Angular

You should note that in the example we need to handle the custom event `kemet-modal-closed`. This is because when the overlay from the modal is clicked, the modal is automatically closed. Kemet Modal fires `kemet-modal-closed` every time the modal is closed. When need to tap into this event to tell our class member `isDrawerOpened` to return to a value of false. You can do this by using `HostListener`. Simply give the first argument of HostListener the name of the event you want to listen to. In this case `kemet-modal-closed`. You can [read more on HostListener](https://angular.io/api/core/HostListener) in the angular docs. 

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

Finally, if you checkout `app.component.html` you'll notice that you write the HTML for the component like you any standard HTML. Just make sure to use property bindings when working with dynamic data.

```html
<main>
  <button (click)="openDrawer()">Open Modal</button>
</main>
<kemet-modal close-on-click effect="fade" [opened]="isDrawerOpened">
  ...
</kemet-modal>
```

---
layout: layouts/default.njk
title: Kemet UI | Wrapping web components in React 18 and older
permalink: 'integrations/react-legacy/'
description: Working with web components can be tricky in React 18 and older. Follow this guide to learn how to use Kemet UI components in React (Legacy).
---

# Wrapping web components in React 18 and older

React 18 and older has issues with Web Components. To get a Web Component to be fully compatible in React (Legacy) you need to use a wrapper. A wrapper handles rich data and events. These are the pitfalls of using Web Components in React (Legacy). With a wrapper you can use a Web Component as if it was an actual React Component.

## Reactbox

[Reactbox](https://stackblitz.com/~/github.com/hasanirogers/web-components-reactbox-legacy) is a React sandbox that demonstrates how to use Kemet UI components in React 18 and older. Check it out.

{% iframe 'https://stackblitz.com/edit/web-components-reactbox-legacy?ctl=1&embed=1&file=src/App.tsx&view=editor', 'Kemet UI | Reactbox' %}

## Working with Wrappers

There are a few wrappers on the market including [React Wrapper](https://www.npmjs.com/package/@shoelace-style/react) created by the Shoelace team and also [Reactify WC](https://www.npmjs.com/package/reactify-wc). You are at liberty to use these wrappers, however the wrapper that this guide covers is called [createComponent](https://www.npmjs.com/package/@lit/react). Create Component is maintained by a Google and is a part of the effort to increase the adoption of Lit by making Web Components compatible with React. Although Kemet components are created with Lit, any Web Component should work well with Create Component. Create Component is recommended because of its strong support from Google.

There are three main steps to using a wrapper in React (Legacy):

1. Import createComponent and the Web Component you want
2. Create a variable that stores a call to createComponent
3. Use that variable as if it was a React component.

## The Setup

Create a variable that stores a call to createComponent.

```javascript
import { createComponent } from '@lit/react';
import { KemetModal as KemetModalClass } from 'kemet-ui/dist/components/kemet-modal.js'

...

const KemetModalMappings = {
  onOpen: 'kemet-modal-opened',
  onClose: 'kemet-modal-closed'
}

export const KemetModal = createComponent(React, 'kemet-modal', KemetModalClass, KemetModalMappings);
```

Create Component accepts 4 args with the last of them being optional. You must pass the React object, the tag name of the web component you want to use, the class used to construct the component, and optionally an object that maps the events.

You can find the name of the class used to construct a component by checking it's source code. In general Kemet component classes are always named Kemet[NameOfComponent] in camel case. So the class for the modal is `KemetModal`. Since we want to use `KemetModal` as the name for our component we import it as KemetModalClass to make the distinction.

Web Components often have build in custom events that fire when some interaction on the Web Component has happened. Kemet Modal has two events, `kemet-modal-opened` and `kemet-modal-closed`. Later you'll see why need these events but for now just know that you can create an mapping object of these events. The key is synthetic React event and the value is the Web Component event to map to.

## Using the Component

Now that the variable is created you can reference it as a component in your app.

```html
<main>
  <button onClick={() => handleModalOpen()}>Open Modal</button>
</main>
<KemetModal close-on-click effect="fade" opened={isDrawerOpened} onClose={() => handleModalClose()}>
  <article>
    <h3>Lorem ipsum</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin felis et lorem aliquam, quis vulputate augue pretium. Vestibulum interdum nisi sed mi maximus ullamcorper. Praesent non nibh velit. Aliquam erat volutpat. Sed ultrices, nunc quis varius ultricies, nisl ipsum hendrerit eros, ut iaculis odio nulla molestie mauris. Vivamus commodo mi at aliquam lacinia. Proin ullamcorper mattis enim quis pellentesque. Nulla aliquet pretium efficitur. Maecenas purus lorem, mattis sit amet nulla in, placerat varius metus. Phasellus felis justo, vulputate id justo et, ullamcorper vulputate urna. Phasellus a ante augue. Vivamus dapibus facilisis nunc vel fringilla. Duis congue quis turpis sed iaculis. Curabitur eget aliquet leo. Duis molestie porttitor leo, a eleifend est porttitor vitae.</p>
  </article>
</KemetModal>
```

In this example we have a piece of state called `isDrawerOpened` that stores whether or not the drawer is opened.

```javascript
const [isDrawerOpened, setIsDrawerOpened] = useState(false);
```

When we click on the button, `handleModalOpen` changes this to open. The opened property is then set to true on the Web Component and the so the modal opens.

Notice however there's no close button on the modal. The modal is using a attribute called `close-on-click` which tells the modal to close when you click on it's scrim. We need to update our state variable `isDrawerOpened` to false when this happens. This is where events come in. Since we created an event mapping, we can now use the synthetic event `onClose` on our component. We give this event a handler that closes the modal when called.

```javascript
const handleModalClose = () => {
  setIsDrawerOpened(false);
};
```

Finally notice that we set the effect property to fade like you a Web Component or React component. And that's it. No `refs` to the element needed. You can work with the component as you would any common React component. If for some reason you need a ref though (such as you need direct access to a method), you can do so like this:

```javascript
let modal;

<KemetModal ref={element => modal = element}>
```

You can then use the `modal` variable to call methods like `modal.myMethod()`. Note that the modal is written where you don't need to call methods directly. But if for some reason you need to with another component, say maybe the carousel, this is how you would do it.

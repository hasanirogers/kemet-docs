---
layout: default
slug: scroll-link
title: "Scroll Link | Kemet UI"
permalink: /components/scroll-link/
---

# Scroll Link

The Scroll Link adds a smooth scrolling link to a target in the current document.

## Import 

### JavaScript
```javascript
import 'kemet-ui/dist/components/kemet-scroll-link.js'
```
### HTML
```html
<script src="https://unpkg.com/kemet-ui@latest/dist/components/kemet-scroll-link.js" type="module"></script>
```


{:kemet-margin-bottom="tiny:normal"}
## Usage

```html
<kemet-scroll-link>
  <button>Scroll to My Heading</button>
</kemet-scroll-link>
```

{:kemet-margin-bottom="tiny:normal"}
## Storybook

[View Scroll Link on Storybook](https://storybook.kemet.dev/?path=/docs/components-kemet-scroll-link--scroll-link)


{:kemet-margin-bottom="tiny:normal"}
## Demo

<docs-showcase caption="Here we set the target of Scroll Link to the heading. If you don't set a target it will scroll to the top.">
<main id="kemet-scroll-link-demo">
  <script>
    // the setTimeout is here just to make sure the elements exists in the demo
    // you shouldn't need a setTimeout in your code
    setTimeout(() => {
      // select the scroll link element 
      const kemetScrollLink = document.querySelector('#kemet-scroll-link-demo kemet-scroll-link');
      // select the target element for the scroll link
      const heading = document.querySelector('#kemet-scroll-link-demo h2');
      // set the target property of the scroll link to the element you want to scroll too
      kemetScrollLink.target = heading;
    }, 1);
  </script>
  <h2 kemet-margin-top="tiny:small">Heading</h2>
  <article>
    <p><strong>Scroll down past the Lorem Ipsum text to see a scroll button.</strong></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, arcu non dapibus posuere, leo dolor bibendum risus, ut vulputate ex neque vitae tellus. Vivamus dolor mi, tempus nec lectus sit amet, consectetur lobortis sapien. Phasellus ultrices felis sit amet pretium tincidunt. Praesent scelerisque bibendum pretium. Suspendisse id placerat ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vitae rutrum arcu, sit amet imperdiet velit. Nullam felis tortor, hendrerit eu sodales eu, euismod non enim.</p>
    <p>Morbi quis nibh non mi vulputate venenatis. Praesent sodales pretium augue sed malesuada. Cras vel neque vel dolor congue ultrices faucibus a nibh. Sed euismod et metus vitae fermentum. Integer lacus lectus, rutrum quis diam nec, pretium dictum dui. Nullam varius nulla ex, commodo feugiat velit efficitur in. Nullam ac dapibus nisl. Sed at enim orci. Nunc semper elementum risus vel ultrices. Quisque faucibus tincidunt ligula eu tincidunt.</p>
    <p>Morbi et velit gravida, ultrices tortor vitae, accumsan metus. Sed luctus ipsum eu libero semper, et fringilla sapien tempor. Fusce porta ligula eget diam molestie convallis. Etiam quis massa sollicitudin, ultricies nunc non, mattis quam. Donec et metus pharetra orci tristique finibus. Curabitur sit amet tellus mattis turpis scelerisque congue. Ut vel augue a ligula varius ultrices quis eu purus. Aliquam id malesuada justo. In ultrices magna quis magna ultricies luctus vel quis erat. Aliquam semper nisl et odio aliquam malesuada. Duis sodales metus id mauris suscipit, quis euismod purus ultricies. Duis ornare, tortor at iaculis finibus, augue elit tincidunt tortor, porta dignissim massa quam sit amet felis. Phasellus vel nibh nisl. Mauris posuere mi sit amet ante consectetur molestie. Integer tristique porta dui vitae bibendum.</p>
    <p>Vestibulum velit sem, semper nec pulvinar ac, dictum nec nisi. Nullam sit amet rhoncus tortor. In egestas, neque id euismod ultricies, magna augue euismod leo, non auctor turpis turpis rhoncus magna. Nulla blandit vel massa semper interdum. Etiam tincidunt pellentesque neque, in convallis ipsum tincidunt imperdiet. Cras erat tellus, tempus a hendrerit quis, scelerisque vitae quam. Praesent justo neque, pharetra sit amet iaculis ut, viverra ut turpis. Donec imperdiet leo sed velit ullamcorper, vitae rutrum urna ullamcorper. Curabitur consectetur interdum magna vitae blandit. Nulla dictum nunc tellus. Etiam sit amet justo quis mi dictum finibus. Sed aliquam eleifend arcu, et hendrerit augue scelerisque a. Aenean finibus lectus quis risus lacinia posuere non quis nunc. Mauris vestibulum justo sed massa porttitor porta. Suspendisse euismod scelerisque nisl, et tristique velit faucibus in. Pellentesque elementum nisl sit amet est feugiat rhoncus.</p>
    <p>Pellentesque et consectetur nisi, nec viverra erat. Vestibulum eu arcu in felis vulputate volutpat. Suspendisse tristique molestie enim eu gravida. Proin vel interdum tellus. Sed condimentum ligula id consectetur vestibulum. Quisque ultricies elit tellus, et placerat tortor mattis nec. Nullam aliquam augue eget purus facilisis, in vestibulum est sagittis.</p>
    <kemet-scroll-link kemet-margin-bottom="tiny:small">
      <docs-button>
        Scroll back to heading
      </docs-button>
    </kemet-scroll-link>
  </article>
</main>
</docs-showcase>

## API

### &lt;kemet-scroll-link&gt;

<docs-api-table base-url="{{ site.baseurl }}" component="kemet-scroll-link"></docs-api-table>

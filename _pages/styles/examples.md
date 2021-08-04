---
layout: default
slug: examples
title: "Style Examples"
permalink: /styles/examples/
---

# Style Examples

The following are examples on how use the Core API to layout a page.

{:#flexrow}
## Flexrow

Flexrow allows you to layout items in row (a flexbox line). Add as many items to the row as you like and sizing is largely automated.

<docs-showcase caption="This is most basic usage of flexrow. Every direct descendent of flexrow will equally distribute space.">
<div kemet-layout="flexrow">
  <div><span class="box">Item 1</span></div>
  <div><span class="box">Item 2</span></div>
  <div><span class="box">Item 3</span></div>
  <div><span class="box">Item 4</span></div>
</div>
</docs-showcase>

<docs-showcase caption="Add autostack to flexrow to force the items to stack to a mobile layout at the $stackpoint variable. Add gutters to flexrow to put gutter spacing between items.">
<div kemet-layout="flexrow" kemet-autostack kemet-gutters>
  <div><span class="box">Item 1</span></div>
  <div><span class="box">Item 2</span></div>
  <div><span class="box">Item 3</span></div>
  <div><span class="box">Item 4</span></div>
</div>
</docs-showcase>

<docs-showcase caption="You can add responsive gutters. The syntax is [breakpoint]:[gutter-value]. So for example, if you wanted the default value for gutters for all breakpoints use tiny:default. Kemet UI is mobile first so using tiny means tiny and up.">
<div kemet-layout="flexrow" kemet-gutters="tiny:none medium:default large:plus-6">
  <div breakpoint="medium:33"><span class="box">Item 1</span></div>
  <div><span class="box">Item 2</span></div>
  <div><span class="box">Item 3</span></div>
  <div><span class="box">Item 4</span></div>
</div>
</docs-showcase>

<docs-showcase caption="You can control the size of items at each breakpoint with breakpoint. The syntax is breakpoint:size. :content means fit the item's content. All other sizes are numerical multiples of 5 (5-100) and also 33 and 66. You only need to add breakpoints to items that you want to size. Items without breakpoints will equally distribute.">
<div kemet-layout="flexrow" kemet-flex-items="" kemet-gutters="minus-1">
  <div kemet-breakpoint="tiny:content"><span class="box">❤️</span></div>
  <div><span class="box">Item 2</span></div>
  <div><span class="box">Item 3</span></div>
  <div kemet-breakpoint="tiny:50"><span class="box">Item 4</span></div>
</div>
</docs-showcase>

<docs-showcase caption="You can align all items by using align on your container or a specific item by using align on your item. Values are top, middle, bottom, stretch.">
<div kemet-layout="flexrow" kemet-gutters="plus-1" kemet-align="middle" style="height: 64px;">
  <div kemet-align="bottom">
    <span class="box">Item 1</span>
  </div>
  <div><span class="box">Item 2</span></div>
  <div kemet-align="top">
    <span class="box">Item 3</span>
  </div>
  <div><span class="box">Item 4</span></div>
  <div kemet-align="bottom">
    <span class="box">Item 5</span>
  </div>
</div>
</docs-showcase>

<docs-showcase caption="You can align acrosss the x-axis with align-cross. Cross align can only be used on a container and effects all items. Values include left, right, center, between, and around.">
<div kemet-layout="flexrow" kemet-align-cross="between">
  <div kemet-breakpoint="tiny:66"><span class="box">Left</span></div>
  <div kemet-breakpoint="tiny:content"><span class="box">Right</span></div>
</div>
</docs-showcase>


{:#flexgrid}
## Flexgrid

Flexgrid allows you to size a list of flex items to achieve effects similar to a grid. Use breakpoint on each item to size them.

<docs-showcase>
<div kemet-layout="flexgrid" kemet-gutters="plus-1">
  <div kemet-breakpoint="tiny:100 medium:33 large:25">
    <span class="box">1</span>
  </div>
  <div kemet-breakpoint="tiny:50 medium:33 large:25">
    <span class="box">2</span>
  </div>
  <div kemet-breakpoint="tiny:50 medium:33 large:25">
    <span class="box">3</span>
  </div>
  <div kemet-breakpoint="tiny:100 medium:100 large:25">
    <span class="box">4</span>
  </div>
</div>
</docs-showcase>

<docs-showcase caption="Use basis on large flexgrids where you want specific columns and don't need individual control over items. You can change the columns at their respective breakpoints.">
<div kemet-layout="flexgrid" kemet-gutters kemet-basis="tiny:4-columns medium:6-columns huge:12-columns">
  <div><span class="box">1</span></div>
  <div><span class="box">2</span></div>
  <div><span class="box">3</span></div>
  <div><span class="box">4</span></div>
  <div><span class="box">5</span></div>
  <div><span class="box">6</span></div>
  <div><span class="box">7</span></div>
  <div><span class="box">8</span></div>
  <div><span class="box">9</span></div>
  <div><span class="box">10</span></div>
  <div><span class="box">11</span></div>
  <div><span class="box">12</span></div>
</div>
</docs-showcase>


{:#flexcolum}
## Flexcolumn

Flexcolumn operates in principal like a flexrow except that it's orientation is that of a column rather than a row.

<docs-showcase caption="A flexcolumn will automatically space each item's height in its container.">
<div kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
  <div><span class="box">1</span></div>
  <div><span class="box">2</span></div>
  <div><span class="box">3</span></div>
</div>
</docs-showcase>

<docs-showcase caption="Use fit-content on an item to size its height the content of the item.">
<div kemet-layout="flexcolumn" kemet-gutters style="height:300px;">
  <div fit-content><span class="box">1</span></div>
  <div><span class="box">2</span></div>
  <div><span class="box">3</span></div>
</div>
</docs-showcase>


{:#flexlist}
## Flexlist

Use Flexlist to take advantage of ordering and alignment while having a presentation that looks like a list. It should be noted that ordering works on all layout types.

<docs-showcase caption="Use a flexlist to take advantage of ordering and alignment while having a presentation that looks like a list.">
<div kemet-layout="flexlist" kemet-gutters>
  <div><span class="box">One</span></div>
  <div><span class="box">Two</span></div>
  <div><span class="box">Three</span></div>
  <div><span class="box">Four</span></div>
  <div><span class="box">Five</span></div>
  <div><span class="box">Six</span></div>
</div>
</docs-showcase>

<docs-showcase caption="You can prioritize elements at a breakpoint using the order attribute.">
<div kemet-layout="flexlist" kemet-gutters>
  <div><span class="box">One</span></div>
  <div><span class="box">Two</span></div>
  <div><span class="box">Three</span></div>
  <div kemet-order="medium:minus-1"><span class="box" style="background:darkgoldenrod;">Four</span></div>
  <div kemet-order="medium:minus-1"><span class="box" style="background:darkgoldenrod;">Five</span></div>
  <div><span class="box">Six</span></div>
</div>
</docs-showcase>

<docs-showcase caption="You can also de-prioritize elements at a breakpoint using the order attribute.">
<div kemet-layout="flexlist" kemet-gutters>
  <div><span class="box">One</span></div>
  <div><span class="box">Two</span></div>
  <div><span class="box">Three</span></div>
  <div kemet-order="medium:plus-1"><span class="box" style="background:darkgoldenrod;">Four</span></div>
  <div kemet-order="medium:plus-1"><span class="box" style="background:darkgoldenrod;">Five</span></div>
  <div><span class="box">Six</span></div>
</div>
</docs-showcase>


{:#visibility kemet-margin-bottom="tiny:normal"}
## Visibility

<docs-showcase caption="Use show and hide to control for visibility.">
<section kemet-layout="flexrow" kemet-gutters kemet-autostack>
  <div>
    <h3>Visibility: Show Classes</h3>
    <p class="box" kemet-show="medium" style="display:none;">This will only show only on medium.</p>
    <p class="box" kemet-show="medium:up" style="display:none;">This will show on medium and up.</p>
    <p class="box" kemet-show="medium:down" style="display:none;">This will show on medium and down.</p>
  </div>
  <div>
    <h3>Visibility: Hide Classes</h3>
    <p class="box" kemet-hide="medium">This will hide only on medium.</p>
    <p class="box" kemet-hide="medium:up">This will hide on medium and up.</p>
    <p class="box" kemet-hide="medium:down">This will hide on medium and down.</p>
  </div>
</section>
</docs-showcase>


{:#typography kemet-margin-bottom="tiny:normal"}
## Typography

<docs-showcase caption="You can control the size of type with type-size.">
<div kemet-layout="flexgrid" kemet-gutters kemet-autostack kemet-basis="medium:2-columns">
  <div kemet-type-size="plus-6">plus-6</div>
  <div kemet-type-size="plus-5">plus-5</div>
  <div kemet-type-size="plus-4">plus-4</div>
  <div kemet-type-size="plus-3">plus-3</div>
  <div kemet-type-size="plus-2">.plus-2</div>
  <div kemet-type-size="plus-1">.plus-1</div>
  <div kemet-type-size="base">base</div>
  <div kemet-type-size="minus-1">minus-1</div>
  <div kemet-type-size="minus-2">minus-2</div>
  <div kemet-type-size="minus-3">minus-3</div>
</div>
</docs-showcase>

<docs-showcase caption="You also have responsive control over the type size.">
<p kemet-type-size="tiny:minus-2 medium:plus-2 large:plus-4">
  Watch me change size at breakpoints.
</p>
</docs-showcase>


{:#alignment kemet-margin-bottom="tiny:normal"}
## Alignment

<docs-showcase caption="You can control alignment responsively.">
<p kemet-type-align="tiny:left medium:center large:right">
  Watch me change alignment at breakpoints.
</p>
</docs-showcase>


{:#spacing kemet-margin-bottom="tiny:normal"}
## Spacing

<docs-showcase caption="You can add margin or padding responsively.">
<div kemet-margin-left="tiny:largest">
  This will have a left margin of largest for all breakpoints.
</div>
<div kemet-margin="small:normal medium:none large:largest">
  This will have responsive margins of normal at small, none at medium, and large at largest.
</div>
</docs-showcase>

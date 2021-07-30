---
layout: default
slug: about
title: "About Styles"
permalink: /styles/about
---

{:#intro}
# Introduction

Although Kemet UI is a designless blueprint system it does come packaged with styles. Kemet UI comes with two styles sheets.

1. `kemet.core.css`
2. `kemet.components.css`

The core styles are structural. They contain a Core API that allows you to handle things like layout and alignment via attributes. The component styles are mostly for demonstration.

{:#api}
## Core API

The Core API consists of attributes you may use to style a page.

| Attribute              | Description                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `kemet-layout`         | Sets the layout mode. Values can either be flexlayout, flexgrid, or flexlist.           |
| `kemet-autostack`      | Automatically stacks the current layout according to the stackpoint configured in Sass. |
| `kemet-gutters`        | Adds responsive guttes to the layout. Configurable by Sass.                             |
| `kemet-breakpoint`     | Use on an item of the current layout. Controls spacing at breakpoints.                  |
| `kemet-align`          | Allows you to control the align of the current layout.                                  |
| `kemet-align-cross`    | Allows you to control the cross-alignment of the current layout.                        |
| `kemet-order`          | Controls the order of a layout item. Can be used responsively.                          |
| `kemet-basis`          | Used on flexgrids in particular. Controls the columns of the grid.                      |
| `kemet-fit-content`    | Used on flexcolumns in particular. Sets the height of an item to the content.           |
| `kemet-flex-items`     | Makes the items in a layout flex.                                                       |
| `kemet-type-size`      | Controls the size of type.                                                              |
| `kemet-show`           | Shows an element given the breakpoint.                                                  |
| `kemet-hide`           | Hides an element given the breakpoint.                                                  |
| `kemet-margin`         | Adds responsive margins to all sides of an element.                                     |
| `kemet-margin-left`    | Adds responsive left margin to an element                                               |
| `kemet-margin-right`   | Adds responsive right margin to an element                                              |
| `kemet-margin-top`     | Adds responsive top margin to an element                                                |
| `kemet-margin-bottom`  | Adds responsive bottom margin to an element                                             |
| `kemet-padding`        | Adds responsive padding to all sides of an element.                                     |
| `kemet-padding-left`   | Adds responsive left padding to an element                                              |
| `kemet-padding-right`  | Adds responsive right padding to an element                                             |
| `kemet-padding-top`    | Adds responsive top padding to an element                                               |
| `kemet-padding-bottom` | Adds responsive bottom padding to an element                                            |

When using responsive attributes the value for the attribute will be delimited with a `:` that separates the breakpoint and value. For example, when working with responsive margins, you'd write the largest margin for the medium breakpoint like: 

```html
kemet-margin="medium:largest"
```

{:#components}
## Components

Out of the box Kemet UI components are minimalist and only contain styles for behavior such as slides on a carousel or the hiding of inactive tabs. The reason for this is the designless philosophy of Kemet UI. Kemet UI empowers you to style your own look and feel. Kemet UI does ship with extra styles for components however. Simply include the styles sheet `kemet.components.css` and Kemet UI will apply sample styles to all components.

{:#config}
## Configuration

Kemet UI comes with several variables that allow you to customize the behavior of the styles. You can [view these variables in the config file](https://github.com/hasanirogers/kemet-ui/blob/main/src/styles/core/_config.scss).

### Gutters

You can control how gutters behave with the $gutters variables. $gutters is a sass map. You can change the values for the map. For example you might want to use px instead of rem for the units on the gutters. You can also change how gutters are referenced by changing the map's key. So instead of minus-1 you might want to change it to simply small. Kemet is smart enough to loop through the map so you can also add or remove any key value you pairs as you wish. Here's an example of a custom $gutters config.

```scss
$gutters: (
  none: 0,
  smallest: 4px,
  smaller: 8px,
  small: 12px,
  default: 16px, // do not remove this
  large: 20px,
  larger: 24px,
  largest: 28px,
);
```

In the example above we changed the keys, values, and number of entries in the map to our custom needs. The only rule is do not remove default.

### Flexiplier

The $flexiplier controls increments of spacing. The default is tens. You may also use fives or twenties. So for example, if you set it to five you can use increments of 5 in your breakpoints.

```html
<div kemet-breakpoint="tiny:15">...</div>
```

In the example above we are able to use `kemet-breakpoint="tiny:15"` because our flexliplier is at fives. We could also use 20, 25, 30, 35, etc since we're incrementing by 5.

### Stackpoint

The $stackpoint is the point at which the library considers your layout to go from "mobile" to "full". The attribute autostack relies on this. The default is set to 640px.

### Breakpoints

This is a map that controls both how many and what sizes your breakpoints are. You can add key/value pairs to the breakpoints as necessary. So for example, if we wanted to simplify the default config we could add the following:

```scss
$breakpoints: (
  mobile: 0,
  tablet: 768px,
  desktop: 1024px,
);
```

We don't recommend such a configuration, but it's possible to achieve. Notice mobile starts at 0px. This is because the media queries are all mobile first and use min-width. So, in this example, mobile starts at 0, tablets starts at 768, and desktop at 1024.

It should also be noted that the breakpoints used the order attribute are determined by this as well.

### Break Ranges

These are specifically for the visibility classes and logically should be consistent with your breakpoints.

### Order

Determines the depth of priority that can be set for the order attribute where depth is defined as a number. The default is 5 so giving an order of order="small-minus-5" would mean the highest priority, starting at small.

### Flexgrid Columns
Use of $flexgridcolumn is specifically for using basis with flexgrid. It simply sets the number of columns. Default is 12.

### Type Sizers

Similar to $gutters, $typesizers allows you to control how sizing for the type utility. The defaults are similar to gutters but can be customized in the same fashion as well.

### Spacers

Controls the amount of spacing used for margin helper classes.

### Make Order

If you want to reduce file size and don't need the order attribute, set $makeorder to false.

### Make Visibility

If you want to reduce file size and don't need the visibility classes, set $makevisibility to false.

### Make Text

If you want to reduce file size and don't need text helper classes, set $maketext to false.

### Make Spacers

If you want to reduce file size and don't need spacers, set $makespacers to false.

# Page Index Web Component

Simple light DOM web component to build a table of contents page index with anchor links based on the headers on the page.

Check out the [Demo Page](https://colinaut.github.io/page-index/)

## Installation

### CDN
```
<script type="module" src="https://unpkg.com/@colinaut/action-table/dist/page-index.js"></script>

```
Optional CSS
```
<link rel="stylesheet" href="https://unpkg.com/@colinaut/action-table/dist/action-table.css" />
```

### NPM

```
npm i @colinaut/page-index

pnpm i @colinaut/page-index
```

## Basic Usage

```
<page-index></page-index>
```

### Attributes

* `selector`: The selector used to select the table of contents items. Defaults to `main h2`
* `header`: (optional) add a header title to the page index. If you include the attribute without a string the text defaults to "Page Index"
* `top`: (optional) add a link to the top of the body tag. If you include the attribute without a string the text defaults to "Top"

The component grabs all elements based on the selector. If the item has an id attribute it uses it, otherwise it creates one. It then builds a list of links based on the textContent of the element.

### Styling

This component builds itself in light DOM so styling is up to you. I've included a simple example css you can use at `dist/page-index.css`.

#### Component HTML

Here is an example of the HTML created by the component with the classes added. Note that the li adds a class based on the tagName for added styling hook.

```
<page-index selector="main :where(h2, h3)" header top>
    <div class="page-index-header"><h2>Page Index</h2><a href="#page-index-body">Top</a></div>
    <ul>
        <li class="page-index-item-h2"><a href="#page-index-0">Header Level 2</a></li>
        <li class="page-index-item-h2"><a href="#page-index-1">Another Header Level 2</a></li>
        <li class="page-index-item-h3"><a href="#page-index-2">Header Level 3</a></li>
    </ul>
</page-index>
```
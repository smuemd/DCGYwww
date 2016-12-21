# SUIT CSS components-example

A SUIT CSS example component that provides a structural template for new
components.

## Installation

* TODO: notes on installation and usage

## Available classes

* `Examplee` - [core] The core Example component
* `Example-cell` - [core] a child cell of Example that wraps example content
* `Example-cell--1` - [core] cell dimention modifier width: 10%;
* `Example-cell--2` - [core] cell dimention modifier width: 20%;
* `Example-cell--3` - [core] cell dimention modifier width: 30%;
* `Example-cell--4` - [core] cell dimention modifier width: 40%;
* `Example-cell--5` - [core] cell dimention modifier width: 50%;
* `is-animating` - [state] an example-cell state class


## Configurable variables

* `--Example-padding;`
* `--Example-highlight-color`
* `--Example-gutter-size`

## Use

Examples:

```html
<div class="Example">
  <div class="Example-cell--2"></div>
  <div class="Example-cell--2"></div>
  <div class="Example-cell--2"></div>
  <div class="Example-cell--4.is-animating"></div>
</div>
```

### Theming / extending

The CSS is focused on common structural requirements of an example. You can
build your application-specific theme styles in your app. For example:

```css
@import "components-example";

/**
 * Modifier: small example
 */

.Example--small {
  background-color: #eee;
  color: #444;
  border-color: #d9d9d9 #d9d9d9 #ccc;
  border-radius: 2px;
}

/**
 * Modifier: large buttons
 */

.Button--large {
  font-size: 1.5em;
  padding: 0.75em 1.5em;
}
```

## Testing (TODO)

TODO: Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

TODO: To generate a build:

```
npm run build
```

TODO: To lint code with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/)

```
npm run lint
```

TODO: To generate the testing build.

```
npm run build-test
```

TODO: To watch the files for making changes to test:

```
npm run watch
```

TODO: Basic visual tests are in `test/index.html`.

## TODO: Browser support

* Google Chrome
* Firefox
* Opera
* Safari
* Internet Explorer 9+

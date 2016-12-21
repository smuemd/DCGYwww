# TODO DCGYwww CSS utilities: _utility name_

Some high level description of package purpose and functionality.

## Installation

* installation instructions here
* usually start with [npm](http://npmjs.org/): `npm install utils-name`

## Available classes

* list classes here.

### Plugins

For example for utilities that can be limited to specific Media Query breakpoints.

* `u-sm-testXofY` - To use at the smallest Media Query breakpoint.
* `u-md-testXofY` - To use at the medium Media Query breakpoint.
* `u-lg-testXofY` - To use at the largest Media Query breakpoint.

### Configuration

Describe config. for example: There are 3 Media Query breakpoints:

* `--sm-viewport`
* `--md-viewport`
* `--lg-viewport`

When using [postcss-custom-media](https://github.com/postcss/postcss-custom-media),
breakpoints can be configured using `@custom-media`. For example:

```css
@custom-media --sm-viewport (min-width:320px) and (max-width:640px);
@custom-media --md-viewport (min-width:640px) and (max-width:960px);
@custom-media --lg-viewport (min-width:960px);
```

## Usage

Describe how to use this thing here. For example:
Please refer to the README for [SUIT CSS utils](https://github.com/suitcss/utils/)

## Testing

Describe testing procedure. For example:

Install [Node](http://nodejs.org) (comes with npm).

```
npm install
```

To generate a build:

```
npm run build
```

To generate the testing build.

```
npm run build-test
```

To lint code with [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) and [stylelint](http://stylelint.io/)

```
npm run lint
```

To watch the files for making changes to test:

```
npm run watch
```

Basic visual tests are in `test/index.html`.

## Browser support

Specify browser support here. For example:
Refer to the [caniuse](http://caniuse.com/) page for [flexbox](http://caniuse.com/#feat=flexbox).

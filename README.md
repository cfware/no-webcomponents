# no-webcomponents

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Self-hiding custom element used to display an error if custom elements are not supported.

This takes advantage of the fact that legacy browsers treat unknown tags the same as a
`<div>`.  This means that without polyfills those browsers will display the contents of
`<no-webcomponents>`.  When custom elements and shadow dom v1 are supported it is hidden.

## Install

```sh
$ npm install no-webcomponents
```

## Usage

See [gh-pages] [(source)] for a demo usage of this element.

[npm-image]: https://img.shields.io/npm/v/no-webcomponents.svg
[npm-url]: https://npmjs.org/package/no-webcomponents
[downloads-image]: https://img.shields.io/npm/dm/no-webcomponents.svg
[downloads-url]: https://npmjs.org/package/no-webcomponents
[license-image]: https://img.shields.io/npm/l/no-webcomponents.svg
[gh-pages]: http://cfware.github.io/no-webcomponents/
[(source)]: https://github.com/cfware/no-webcomponents/tree/gh-pages

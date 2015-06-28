# &lt;no-webcomponents&gt;

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install coreyfarrell/no-webcomponents --save
```

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/no-webcomponents/no-webcomponents.html">
    ```

3. Start using it!

    ```html
    <no-webcomponents>Your browser is not supported.</no-webcomponents>
    ```

## Development

In order to test it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

    ```sh
    $ npm install -g bower polyserve
    ```

2. Install local dependencies:

    ```sh
    $ bower install
    ```

3. Start development server and open `http://localhost:8080/components/no-webcomponents/`.

    ```sh
    $ polyserve
    ```

## History

For detailed changelog, check [Releases](https://github.com/coreyfarrell/no-webcomponents/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)

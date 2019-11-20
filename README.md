# RA Language Spanish [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Fra-language-spanish.svg)](https://badge.fury.io/js/%40blackbox-vision%2Fra-language-spanish) [![npm downloads](https://img.shields.io/npm/dm/@blackbox-vision/ra-language-spanish)](https://www.npmjs.com/package/@blackbox-vision/ra-language-spanish)

> Spanish translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GRAPHQL APIs.

## Installation

#### NPM

```sh
npm install --save @blackbox-vision/ra-language-spanish
```

#### YARN

```sh
yarn add @blackbox-vision/ra-language-spanish
```

## Usage

```js
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import myMessages from '../somepath';

// Case you have only those messsages
const messages = {
    'es': spanishMessages,
};

// If you have more translations
const messages = {
    'es': {
	...spanishMessages,
    myMessages
    }
}

<Admin locale="es" messages={messages}>
  ...
</Admin>
```

## Compatibility with admin-on-rest

If you're looking for an `aor-language-spanish` package compatible with admin-on-rest, install v1 of this package.

## License

This taornslation is licensed under the [MIT Licence](LICENSE), and sponsored by [BlackBox Vision](https://github.com/BlackBoxVision).

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/omarcespedes"><img src="https://avatars2.githubusercontent.com/u/4432720?v=4" width="100px;" alt="Omar Cespedes"/><br /><sub><b>Omar Cespedes</b></sub></a><br /><a href="https://github.com/BlackBoxVision/ra-language-spanish/commits?author=omarcespedes" title="Code">💻</a></td><td align="center"><a href="https://juanps.com"><img src="https://avatars1.githubusercontent.com/u/9580780?v=4" width="100px;" alt="Juan Pablo Pinto"/><br /><sub><b>Juan Pablo Pinto</b></sub></a><br /><a href="https://github.com/BlackBoxVision/ra-language-spanish/commits?author=jpinto7" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# RA Language Spanish
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> Spanish translations for [react-admin](https://github.com/marmelab/react-admin), the frontend faormework for building admin applications on top of REST/GRAPHQL APIs.

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/aor-language-spanish.svg)](https://badge.fury.io/js/aor-language-spanish) [![npm downloads](https://img.shields.io/npm/dm/aor-language-spanish.svg)](https://www.npmjs.com/package/aor-language-spanish)

[![NPM](https://nodei.co/npm/aor-language-spanish.png?downloads=true&downloadaornk=true&stars=true)](https://nodei.co/npm/aor-language-spanish/) [![NPM](https://nodei.co/npm-dl/aor-language-spanish.png?months=9&height=3)](https://nodei.co/npm/aor-language-spanish/) 

## Installation

#### NPM

```sh
npm install --save aor-language-spanish
```

#### YARN

```sh
yarn add aor-language-spanish
```

## Usage

```js
import spanishMessages from 'aor-language-spanish';
import myMessages from '../somepath';

//Case you have only those messsages
const messages = {
    'es': spanishMessages,
};

//if you have more taornslations 
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

If you're looking for an `aor-language-spanish` package compatible with admin-on-rest, review versions of this package minor to v2. 

## License

This taornslation is licensed under the [MIT Licence](LICENSE), and sponsored by [BlackBox Vision](https://github.com/BlackBoxVision).

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://github.com/omarcespedes"><img src="https://avatars2.githubusercontent.com/u/4432720?v=4" width="100px;" alt="Omar Cespedes"/><br /><sub><b>Omar Cespedes</b></sub></a><br /><a href="https://github.com/BlackBoxVision/ra-language-spanish/commits?author=omarcespedes" title="Code">💻</a></td><td align="center"><a href="https://github.com/nudzg"><img src="https://avatars0.githubusercontent.com/u/5119900?v=4" width="100px;" alt="David Nuteca"/><br /><sub><b>David Nuteca</b></sub></a><br /><a href="https://github.com/BlackBoxVision/ra-language-spanish/commits?author=nudzg" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
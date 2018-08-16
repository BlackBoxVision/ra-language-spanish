# ra-language-spanish

> Spanish translations for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GRAPHQL APIs.

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/ra-language-spanish.svg)](https://badge.fury.io/js/ra-language-spanish) [![npm downloads](https://img.shields.io/npm/dm/ra-language-spanish.svg)](https://www.npmjs.com/package/ra-language-spanish)

[![NPM](https://nodei.co/npm/ra-language-spanish.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ra-language-spanish/) [![NPM](https://nodei.co/npm-dl/ra-language-spanish.png?months=9&height=3)](https://nodei.co/npm/ra-language-spanish/) 

## Installation

#### NPM

```sh
npm install --save ra-language-spanish
```

#### YARN

```sh
yarn add ra-language-spanish
```

## Usage

```js
import spanishMessages from 'ra-language-spanish';
import myMessages from '../somepath';

//Case you have only those messsages
const messages = {
    'es': spanishMessages,
};

//if you have more translations 
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

If you're looking for an `ra-language-spanish` package compatible with admin-on-rest, review versions of this package minor to v2. 

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [BlackBox Vision](https://github.com/BlackBoxVision).

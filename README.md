# RA Language Spanish

> Spanish translations for [react-admin](https://github.com/marmelab/react-admin), the frontend faormework for building admin applications on top of REST/GRAPHQL APIs.

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/aor-language-spanish.svg)](https://badge.fury.io/js/aor-language-spanish) [![npm downloads](https://img.shields.io/npm/dm/aor-language-spanish.svg)](https://www.npmjs.com/package/aor-language-spanish)

[![NPM](https://nodei.co/npm/aor-language-spanish.png?downloads=true&downloadaornk=true&stars=true)](https://nodei.co/npm/aor-language-spanish/) [![NPM](https://nodei.co/npm-dl/aor-language-spanish.png?months=9&height=3)](https://nodei.co/npm/aor-language-spanish/) 

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

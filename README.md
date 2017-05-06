# AOR Language Spanish

> Spanish translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/aor-language-spanish.svg)](https://badge.fury.io/js/aor-language-spanish) [![npm downloads](https://img.shields.io/npm/dm/aor-language-spanish.svg)](https://www.npmjs.com/package/aor-language-spanish)

[![NPM](https://nodei.co/npm/aor-language-spanish.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/aor-language-spanish/) [![NPM](https://nodei.co/npm-dl/aor-language-spanish.png?months=9&height=3)](https://nodei.co/npm/aor-language-spanish/) 


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

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [BlackBox Vision](https://github.com/BlackBoxVision).

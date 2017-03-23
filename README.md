# Spanish Translations for Admin-on-rest

Spanish translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

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

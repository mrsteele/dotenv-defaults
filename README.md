# dotenv-defaults

A dotenv system that supports defaults

### Status

![npm](https://img.shields.io/npm/v/dotenv-defaults.svg)
![David](https://img.shields.io/david/mrsteele/dotenv-defaults.svg)
![David](https://img.shields.io/david/dev/mrsteele/dotenv-defaults.svg)


### Installation

Use the following to install this module.

```
npm i dotenv-defaults --save
```

### Usage

This module supports all the features from the original [dotenv](https://www.npmjs.com/package/dotenv) module, so usage should be simple enough:

```
# .env.deaults, safe to commit
HOST=website.com
EMAIL=test@email.com
```

```
# .env, DO NOT COMMIT
HOST=omnionline.us
```

The result

```js
require('dotenv-defaults').config()

console.log(process.env.HOST)
// Outputs: omnionline.us

console.log(process.env.EMAIL)
// Outputs: test@email.com
```

### Differences

The only thing to note is that the original module supported an `options` argument in the `config` function.

This module supports that as well, but there is an added `defaults` property that can allow you to define where that file is located. An example is shown below:

```js
// all of these are the default values...
require(`dotenv-defaults`).config({
  path: './.env',
  encoding: 'utf8',
  defaults: './.env.defaults' // This is new
})
```

### License

MIT

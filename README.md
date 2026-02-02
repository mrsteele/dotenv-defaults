# dotenv-defaults

A dotenv system that supports defaults.

### Status

![npm](https://img.shields.io/npm/v/dotenv-defaults.svg)
[![Main](https://github.com/mrsteele/dotenv-defaults/actions/workflows/main.yml/badge.svg)](https://github.com/mrsteele/dotenv-defaults/actions/workflows/main.yml)
[![dotenv-vault](https://badge.dotenv.org/works-with.svg?r=3)](https://www.dotenv.org/get-started?r=3)

### Installation

Use the following to install this module:

```
npm i dotenv-defaults --save
```

### Usage

This module supports all the features from the original [dotenv](https://www.npmjs.com/package/dotenv) module, so usage should be simple enough:

```
# .env.defaults, safe to commit
HOST=website.com
EMAIL=test@email.com
```

```
# .env, DO NOT COMMIT
HOST=mrsteele.dev
```

The result

```js
// ESM (Node.js 18+)
import { config } from 'dotenv-defaults'
config()

// Or load it directly like this
import 'dotenv-defaults/config'

console.log(process.env.HOST)
// Outputs: mrsteele.dev

console.log(process.env.EMAIL)
// Outputs: test@email.com
```

##### TypeScript
This module now includes full TypeScript type definitions and works seamlessly with TypeScript:

```typescript
import { config, parse, type ConfigOptions } from 'dotenv-defaults'

// Or load directly
import 'dotenv-defaults/config'

const options: ConfigOptions = {
  path: './.env',
  defaults: './.env.defaults'
}

config(options)
```

##### CLI
You can also call this module directly when using the node executable.
So, for example if you are running a custom script with node and you want to load your environment variables you can do the following `node --import dotenv-defaults/config your-script.js`. (_When using this method, please make sure that you have installed dotenv-defaults with npm or yarn in the same directory_)

> **Note:** For Node.js versions that don't support `--import`, you can use `node --loader dotenv-defaults/config your-script.js`

### Differences

The only thing to note is that the original module supported an `options` argument in the `config` function.

This module supports that as well, but there is an added `defaults` property that can allow you to define where that file is located. An example is shown below:

```js
// ESM
import { config } from 'dotenv-defaults'

// all of these are the default values...
config({
  path: './.env',
  encoding: 'utf8',
  defaults: './.env.defaults' // This is new
})
```

### License

MIT

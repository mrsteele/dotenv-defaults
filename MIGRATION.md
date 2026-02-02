# Migration Guide to v3.0.0

This document outlines the breaking changes and migration steps needed to upgrade from v2.x to v3.0.0.

## Breaking Changes

### 1. Node.js Version Requirement ⚠️

**Changed:** Minimum Node.js version is now **18.0.0**

**Why:** This allows us to use modern ESM features and latest JavaScript syntax without transpilation.

**Migration:**
- Update your Node.js to version 18 or higher
- Check your CI/CD pipelines and Docker images

### 2. ESM (ES Modules) Only ⚠️

**Changed:** The package now uses ESM instead of CommonJS

**Before (v2.x):**
```js
const dotenvDefaults = require('dotenv-defaults')
dotenvDefaults.config()

// or
require('dotenv-defaults/config')
```

**After (v3.x):**
```js
import { config } from 'dotenv-defaults'
config()

// or
import 'dotenv-defaults/config'
```

**Migration:**
- Convert your `require()` calls to `import` statements
- Ensure your project uses `"type": "module"` in package.json OR use `.mjs` file extensions
- Update CLI usage from `-r` to `--import` (see below)

### 3. CLI Flag Change ⚠️

**Changed:** Node.js CLI flag for preloading

**Before (v2.x):**
```bash
node -r dotenv-defaults/config your-script.js
```

**After (v3.x):**
```bash
node --import dotenv-defaults/config your-script.js
```

**Note:** For older Node.js 18.x versions without `--import` support, you can use:
```bash
node --loader dotenv-defaults/config your-script.js
```

### 4. Named Exports

**Changed:** The package now provides named exports

**Before (v2.x):**
```js
const dotenvDefaults = require('dotenv-defaults')
dotenvDefaults.config()
dotenvDefaults.parse()
```

**After (v3.x):**
```js
import { config, parse } from 'dotenv-defaults'
// or
import dotenvDefaults from 'dotenv-defaults'
dotenvDefaults.config()
```

## New Features

### TypeScript Support 🎉

The package now includes full TypeScript type definitions:

```typescript
import { config, parse, type ConfigOptions } from 'dotenv-defaults'

const options: ConfigOptions = {
  path: './.env',
  defaults: './.env.defaults',
  encoding: 'utf8'
}

config(options)
```

### Better JSDoc Types

All functions now have comprehensive JSDoc comments for better IDE support, even in plain JavaScript.

### Modern Package Exports

The package now uses the `exports` field for better import resolution:

```json
{
  "exports": {
    ".": "./src/index.js",
    "./config": "./config.js"
  }
}
```

## Non-Breaking Changes

### Updated Dependencies

- `dotenv`: ^14.0.0 → ^16.4.7
- `jest`: ^27.2.0 → ^29.7.0
- `standard`: ^16.0.3 → ^17.1.2

### Development

- Added `@types/node` for better TypeScript development experience
- Updated test runner configuration for ESM support

## Compatibility Table

| Version | Node.js | Module System | TypeScript |
|---------|---------|---------------|------------|
| 2.x     | ≥12     | CommonJS      | ❌ (workarounds needed) |
| 3.x     | ≥18     | ESM           | ✅ Full support |

## Questions?

If you encounter issues during migration, please open an issue on GitHub.

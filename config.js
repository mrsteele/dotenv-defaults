// The purpose of this file is to be able to load the module with...
//  ... "import "dotenv-defaults/config"" in JavaScript or TypeScript...
//  ... or "node -r dotenv-defaults/config script.js" from the command line

import { config } from './src/index.js'

config()

// The purpose of this file is to be able to load the module with...
//  ... "require("dotenv-defaults/init")" in JavaScript or "import "dotenv-defaults/init"" in TypeScript...
//  ... or "node -r dotenv-defaults/init script.js" from the command line

(function() {
  require('./src/index').config()
})();

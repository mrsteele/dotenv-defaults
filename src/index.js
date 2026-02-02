import dotenv from 'dotenv'

/**
 * @typedef {Object} ParsedEnv
 * @property {Record<string, string>} [parsed]
 */

/**
 * @typedef {Object} ConfigOptions
 * @property {string} [path] - Path to .env file
 * @property {string} [encoding] - Encoding of .env file
 * @property {boolean} [debug] - Enable debug output
 * @property {boolean} [override] - Override existing process.env variables
 * @property {string} [defaults] - Path to .env.defaults file
 */

/**
 * Merges two objects.
 * @param {Record<string, string>} [apply={}] - The overwriter
 * @param {Record<string, string>} [defaults={}] - The defaults to be overwritten
 * @returns {Record<string, string>} The merged results.
 */
const merge = (apply = {}, defaults = {}) => Object.assign({}, defaults, apply)

/**
 * Parses objects like before, but with defaults!
 * @param {string | Buffer} src - The original src.
 * @param {string | Buffer} [defaultSrc=''] - The new-and-improved default source.
 * @returns {Record<string, string>} The parsed results.
 */
export const parse = (src, defaultSrc = '') => {
  const parsedSrc = dotenv.parse(src)
  const parsedDefault = dotenv.parse(defaultSrc)

  return merge(parsedSrc, parsedDefault)
}

/**
 * Runs the configurations and applies it to process.env.
 * @param {ConfigOptions} [options={}] - The options to determine how this goes
 * @returns {ParsedEnv} The parsed results.
 */
export const config = (options = {}) => {
  const src = dotenv.config(options)
  // we run this second so it doesn't override things set from src
  const defaults = dotenv.config(Object.assign({}, options, {
    path: options.defaults || '.env.defaults'
  }))

  return {
    parsed: merge(src.parsed, defaults.parsed)
  }
}

export default {
  parse,
  config
}

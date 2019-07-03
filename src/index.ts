import dotenv, {DotenvConfigOptions} from 'dotenv'

/**
 * Merges two objects.
 * @param apply - The overwriter
 * @param defaults - The defaults to be overwritten
 * @returns The merged results.
 */
const merge = (apply = {}, defaults = {}) => Object.assign({}, defaults, apply)

/**
 * Parses objects like before, but with defaults!
 * @param src - The original src.
 * @param [defaultSrc=''] - The new-and-improved default source.
 * @returns The parsed results.
 */
export const parse = (src: string, defaultSrc: string = ''): ReturnType<typeof dotenv.parse> => {
  const parsedSrc = dotenv.parse(src)
  const parsedDefault = dotenv.parse(defaultSrc)

  return merge(parsedSrc, parsedDefault)
}

interface DotenvDefaultsConfigOptions extends DotenvConfigOptions {
  /**
   * Custom path to file containing environment variable defaults.
   */
  defaults?: string
}
/**
 * Runs the configurations and applies it to process.env.
 * @param [options={}] - The options to determnie how this goes
 * @returns The parsed results.
 */
export const config = (options: DotenvDefaultsConfigOptions = {}) => {
  const src = dotenv.config(options)
  // we run this second so it doesn't override things set from src
  const defaults = dotenv.config(Object.assign({}, options, {
    path: options.defaults || '.env.defaults'
  }))

  return {
    parsed: merge(src.parsed, defaults.parsed)
  }
}

export const load = config

export default {parse, config, load}

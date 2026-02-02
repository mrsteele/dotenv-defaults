/**
 * Configuration options for dotenv-defaults
 */
export interface ConfigOptions {
  /**
   * Path to .env file
   * @default '.env'
   */
  path?: string

  /**
   * Encoding of .env file
   * @default 'utf8'
   */
  encoding?: string

  /**
   * Enable debug output
   * @default false
   */
  debug?: boolean

  /**
   * Override existing process.env variables
   * @default false
   */
  override?: boolean

  /**
   * Path to .env.defaults file
   * @default '.env.defaults'
   */
  defaults?: string
}

/**
 * Parsed environment variables result
 */
export interface ParsedEnv {
  parsed?: Record<string, string>
}

/**
 * Parses environment variables with defaults support
 * @param src - The original source string or buffer
 * @param defaultSrc - The default source string or buffer
 * @returns The merged parsed environment variables
 */
export function parse(
  src: string | Buffer,
  defaultSrc?: string | Buffer
): Record<string, string>

/**
 * Runs the configurations and applies it to process.env
 * @param options - Configuration options
 * @returns The parsed environment variables
 */
export function config(options?: ConfigOptions): ParsedEnv

declare const dotenvDefaults: {
  parse: typeof parse
  config: typeof config
}

export default dotenvDefaults

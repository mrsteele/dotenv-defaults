// This file is just for testing TypeScript compatibility - not meant to be run
// It should type-check successfully if TypeScript is installed

import { config, parse, type ConfigOptions } from './index.js'

// Test 1: config with no options
const result1 = config()
result1.parsed?.TEST

// Test 2: config with options
const options: ConfigOptions = {
  path: './.env',
  encoding: 'utf8',
  defaults: './.env.defaults',
  debug: false,
  override: true
}
const result2 = config(options)

// Test 3: parse function
const parsed1 = parse('TEST=hello')
const value1: string = parsed1.TEST

const parsed2 = parse('TEST=hello', 'TEST2=world')
const value2: string = parsed2.TEST2

// Test 4: default import
import dotenvDefaults from './index.js'
dotenvDefaults.config()
dotenvDefaults.parse('TEST=value')

/* global describe, test, expect */

const Module = require('.')

describe('dotenv-defaults', () => {
  describe('root', () => {
    test('should exist', () => {
      expect(Module).toBeDefined()
    })
  })

  describe('config', () => {
    test('should write some of these...', () => {
      expect(true).toEqual(true)
    })
  })

  describe('parse', () => {
    test('should exist', () => {
      expect(Module.parse).toBeDefined()
    })

    test('should be a function', () => {
      expect(typeof Module.parse).toEqual('function')
    })

    test('should read variables', () => {
      expect(Module.parse(`TEST=hello`)).toEqual({TEST: 'hello'})
    })

    test('should include defaults', () => {
      const src = `TEST=hello`
      const defaults = `TEST2=goodbye`
      expect(Module.parse(src, defaults)).toEqual({
        TEST: 'hello',
        TEST2: 'goodbye'
      })
    })

    test('should not override defaults', () => {
      const src = `TEST=hello`
      const defaults = `TEST=goodbye`
      expect(Module.parse(src, defaults)).toEqual({TEST: 'hello'})
    })
  })
})

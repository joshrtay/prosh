/**
 * Imports
 */

const test = require('tape')
const prosh = require('../')

/**
 * Tests
 */

test('should echo and consume', (t) => {
  prosh('echo "hello world"', true).then((stdout) => {
    t.equal(stdout, 'hello world\n')
    t.end()
  })
})

test('should multi line echo and consume', (t) => {
  prosh('echo "hello world"\necho "hello world"', true).then((stdout) => {
    t.equal(stdout, 'hello world\nhello world\n')
    t.end()
  })
})

test('should echo', (t) => {
  prosh('echo "hello world"').then(stdout => {
    t.equal(stdout, '')
    t.end()
  })
})

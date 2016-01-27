/**
 * Imports
 */

import test from 'tape'
import prosh from '../src'

/**
 * Tests
 */

test('should echo and consume', (t) => {
  prosh('echo "hello world"', true).then((stdout) => {
    t.equal(stdout, 'hello world\n')
    t.end()
  })
})

test('should echo', (t) => {
  prosh('echo "hello world"').then(stdout => {
    t.equal(stdout, '')
    t.end()
  })
})

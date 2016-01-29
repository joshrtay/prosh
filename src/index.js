/**
 * Imports
 */

import {spawn} from 'child_process'

/**
 * prosh
 */

function prosh (command, capture) {
  return new Promise(function (resolve, reject) {
    let proc = spawn('/bin/sh', ['-c', command], {stdio: capture ? 'pipe' : 'inherit'})
    let stdout = ''
    let stderr = ''

    proc.on('error', reject)
    proc.on('close', (code) => {
      if (code === 0) {
        resolve(stdout)
      } else {
        reject(stderr)
      }
    })

    if (!capture) return

    proc.stdout.on('data', (chunk) => {
      process.stdout.write(chunk)
      stdout += chunk
    })
    proc.stderr.on('data', (chunk) => {
      process.stderr.write(chunk)
      stderr += chunk
    })
  })
}

/**
 * Exports
 */

export default prosh

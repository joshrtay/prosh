/**
 * Imports
 */

const {spawn} = require('child_process')

/**
 * Exports
 */

module.exports = prosh

/**
 * prosh
 */

function prosh (command, options = {}) {
  return new Promise(function (resolve, reject) {
    let proc = spawn('/bin/sh', ['-c', command], {stdio: options.capture ? 'pipe' : 'inherit', cwd: options.cwd})
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

    if (!options.capture) return

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

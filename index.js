/**
 * Spawn a command and pipe the output back to std{in,out,err}
 * @param  {String} cmd Name of command to spawn
 * @param  {Array} args Array of arguments to pass to spawn
 * @return {Function}
 */
var spawn = require('child_process').spawn
  , log = require('simple-time-log')

module.exports = function simpleSpawner(cmd) {
  var args, options, isOptionsEmpty

  if (Array.isArray(arguments[1])) {
    args = arguments[1].slice(0)
    options = arguments[2]
  } else if (arguments[1] !== undefined &&
             (arguments[1] === null || typeof arguments[1] !== 'object')) {
    throw new TypeError('Incorrect value of args option')
  } else {
    args = []
    options = arguments[1]
  }
  if (options === undefined) options = {}
  isOptionsEmpty = Object.keys(options).length === 0

  if (!isOptionsEmpty) {
    log("Spawn options:", options)
  }

  log("Spawning: " + cmd + " " + (args.join(' ')))
  var spawnedProcess = spawn(cmd, args, options)
  spawnedProcess.stdout.pipe(process.stdout)
  spawnedProcess.stderr.pipe(process.stderr)
  spawnedProcess.stdin.pipe(process.stdin)
  return spawnedProcess
}

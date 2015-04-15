# simple-spawner
Spawn a command and pipe the output back to stdin, stdout, and stderr, and returns the stream


Also accepts `child_process.spawn` options

## Installation
  `npm install simple-spawner --save`

## Usage
```javascript
var spawner = require('simple-spawner')
  , cmd = 'ls'
  , args = ['-a', '-l']

spawner(cmd, args, /*, options*/)
```

# License
MIT

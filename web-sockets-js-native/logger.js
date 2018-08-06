

// https://github.com/trentm/node-bunyan
const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'occ-opt-down',
  streams: [
    // Log debug and above to stdout
    {
      level: 'debug',
      stream: process.stdout,
    },
  ],
});

module.exports = logger;

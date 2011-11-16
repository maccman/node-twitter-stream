ts = require('./twitter-stream.js');

var stream = ts.connect();
stream.on('status', function(status) {
  console.info(status);
});


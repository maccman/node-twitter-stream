var assert = require('assert');
var ts = require('./twitter-stream.js');

require('fs').readFile('test-config.json', 'utf8', function(error, config_file_data) {
  var config = JSON.parse(config_file_data);
  config.action = 'sample';
  var stream = ts.connect(config);
  stream.on('status', function(status) {
    console.info(JSON.stringify(status));
    if (status.id > 0) stream.abort();
  });
  stream.on('error', function(error) {
    console.info(error);
  });
})


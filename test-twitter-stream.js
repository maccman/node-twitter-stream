var assert = require('assert');
var ts = require('./twitter-stream.js');

/*
require('fs').readFile('test-config.json', 'utf8', function(error, config_file_data) {
  var config = JSON.parse(config_file_data);
  config.action = 'sample';
  var stream = ts.connect(config);
  stream.on('status', function(status) {
    console.info(status);
  });
})
//*/

assert.throws(function() { ts.helpers.ensureRequiredOptions({}) });

assert.equal( ts.helpers.prepareQueryString({a:1, b:2}), '?a=1&b=2' );
assert.equal( ts.helpers.prepareQueryString(), '' );

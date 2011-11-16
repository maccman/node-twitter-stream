var https = require('https');
var events = require('events');

exports.connect = function() {
  var emitter = new events.EventEmitter;
  var request = https.request({
    host: 'stream.twitter.com',
    path: '/1/statuses/sample.json',
    auth: ':'
  }, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      emitter.emit('status', JSON.parse(chunk));
    });
  });
  request.end();
  return emitter;
};

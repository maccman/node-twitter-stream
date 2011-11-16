var https = require('https');
var events = require('events');

exports.connect = function(options) {
  [ 'action', 'screen_name', 'password'].forEach(function(requiredOption) {
	  if (options[requiredOption] === undefined) throw requiredOption + " is missing";
	});

  var emitter = new events.EventEmitter;
  var request = https.request({
    host: 'stream.twitter.com',
    path: '/1/statuses/' + options.action + '.json',
    auth: options.screen_name + ':' + options.password,
  }, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      emitter.emit('status', JSON.parse(chunk));
    });
  });
  request.end();
  return emitter;
};

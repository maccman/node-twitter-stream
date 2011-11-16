var ts = require('./twitter-stream.js');


require('fs').readFile('test-config.json', 'utf8', function(error, config_file_data) {
	var stream = ts.connect(JSON.parse(config_file_data));
	stream.on('status', function(status) {
		console.info(status);
	});
})



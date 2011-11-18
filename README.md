# Twitter Streaming API Library for Node.js

## Example

```javascript
var ts = require('twitter-stream');

var stream = ts.connect({
  screen_name: '',
  password: '',
  action: 'sample',
});

stream.on('status', function(status) {
  console.log(status);
});
```

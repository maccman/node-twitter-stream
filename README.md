# Twitter Streaming API Library for Node.js

## Install

### Install into current directory

```
npm install twitter-stream
```

### Install into system wide location

```
sudo npm install -g twitter-stream
```

## Example

```javascript
var ts = require('twitter-stream');

//Connecting to Twitter Streaming API
var stream = ts.connect({
  screen_name: '',
  password: '',
  action: 'sample',
});

//Retrieving status one by one
stream.on('status', function(status) {
  console.log(status);
});

//Handling error
stream.on('error', function(error) function{
  console.error(error);
});

//Aborting the stream
stream.abort();
```

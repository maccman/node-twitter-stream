var assert = require('assert');
var ts = require('./twitter-stream.js');

assert.throws(function() { ts.helpers.ensureRequiredOptions({}) });

assert.equal( ts.helpers.prepareQueryString({count: 0, delimited: 'length'}), '?count=0&delimited=length' );
assert.equal( ts.helpers.prepareQueryString(), '' );

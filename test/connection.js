var expect = require('chai').expect;

var Connection = require('../lib/connection').Connection;

var log = process.env.DEBUG ? require('bunyan').createLogger({ name: 'http2', level: 'trace' })
                            : undefined;

describe('connection.js', function() {
  describe('scenario', function() {
    describe('connection setup', function() {
      it.only('should work as expected', function(done) {
        var c = new Connection(1, {}, log);
        var s = new Connection(2, {}, log);

        c.pipe(s).pipe(c);

        setTimeout(function() {
          // If there are no exception until this, then we're done
          done();
        }, 10);
      });
    });
  });
});

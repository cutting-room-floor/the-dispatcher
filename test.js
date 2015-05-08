var test = require('tape');
var Dispatcher = require('./');

test('dispatcher', function(t) {
    t.ok(Dispatcher, 'creates a dispatcher');
    t.end();
});

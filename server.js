var express = require('express'),
    debug = require('debug')('app4');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config  = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')(config);

require('./server/config/routes')(app);

app.listen(config.port, function() {
    debug('Express server listening on port ' + server.address().port);
});;
console.log('Listening on port: ' + config.port + '...');
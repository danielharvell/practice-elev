var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/PracticeElev',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://danielharvell:1Soft2Dev3@ds047571.mongolab.com:47571/practice_elev',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};


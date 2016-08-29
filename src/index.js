
'use strict';

const fileserver = require('selenium-webdriver/lib/test/fileserver');

console.log('Starting server on ' + process.env.PORT);

fileserver.start(process.env.PORT || 2311).then(function() {
    console.log('Server running at ' + fileserver.url());
});
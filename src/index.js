
'use strict';

const fileserver = require('selenium-webdriver/lib/test/fileserver');

fileserver.start(2311).then(function() {
    console.log('Server running at ' + fileserver.url());
});
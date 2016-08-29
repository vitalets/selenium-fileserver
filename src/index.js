
'use strict';

/*
 heroku cant start fileserver as is because it passes 'localhost' to .listen() method.
 To overcome that with no edits of original httpserver.js we intercept http.createServer and exclude host
 */
const http = require('http');
const _createServer = http.createServer;
http.createServer = function () {
  const server = _createServer.apply(http, arguments);
  const _listen = server.listen;
  server.listen = function (port, host, cb) {
    // exclude host
    return _listen.call(server, port, cb);
  };
  return server;
};

const fileserver = require('selenium-webdriver/lib/test/fileserver');

fileserver.start(process.env.PORT || 2311).then(function() {
  console.log('Server running at ' + fileserver.url());
});

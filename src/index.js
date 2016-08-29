
'use strict';

const fileserver = require('selenium-webdriver/lib/test/fileserver');

/*
fileserver.start(process.env.PORT || 2311).then(function() {
    console.log('Server running at ' + fileserver.url());
});
*/

var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
  var result = 'App is running';
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});

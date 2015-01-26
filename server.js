/**
* Copyright 2015, Mapacode Inc.
* Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
*/
'use strict';
var express = require('express');

var server = express();

server.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = server.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('HMI server listening at http://%s:%s', host, port)

})

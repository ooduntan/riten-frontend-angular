(function () {
  'use strict';

  var express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    app = express();

  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/public'));

  app.get('/*', function (req, res) {
    // res.render('index', { title: 'Express' });
    res.sendFile('index.html', {
      root: './public/'
    });
  });

  app.listen(3000, function () {
    console.log('Server started at port 3000');
  });

} ());

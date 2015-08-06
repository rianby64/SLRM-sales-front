;(function() {
  "use strict";
  
  var express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      request = require('request'),
      xToken;
  
//  var multer = require('multer');
  
//  var session = require('express-session');
//  var passwordless = require('passwordless');
//  var PostgreStore = require('passwordless-postgrestore');
//  var email = require("emailjs");
//
//  var smtpServer = email.server.connect({
//    user:     'info_matematico_pro', 
//    password: 'matematico_info@64_128=', 
//    host:     'smtp.matematico.pro'
//  });
//  passwordless.init(new PostgreStore('postgres://test@localhost/test'));
//
//  passwordless
//    .addDelivery(function(tokenToSend, uidToSend, recipient, callback) {
//      var host = 'localhost:3000';
//      smtpServer.send({
//        text:    'Hello!\nAccess your account here: http://' 
//        + host + '?token=' + tokenToSend + '&uid=' 
//        + encodeURIComponent(uidToSend), 
//        from:    yourEmail, 
//        to:      recipient,
//        subject: 'Token for ' + host
//      }, function(err, message) { 
//        if(err) {
//          console.log(err);
//        }
//        callback(err);
//      });
//    });
//
//  app.use(session({
//    secret: 'this is an interesting story about a cat that used to type in my keyboard some stories'
//  }));
  
//  app.use(passwordless.sessionSupport());
//  app.use(passwordless.acceptToken({ successRedirect: '/'}));
  
  app.use(express.static('./'));
  
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  //app.use(multer()); // for parsing multipart/form-data

  app
    .route('/api/*')
    .all(function(req, res, next) {

    // runs for all HTTP verbs first
    // think of it as route specific middleware!

    var url = "http://172.24.6.22:8050";
    
    if (req.url[0] === '/') {
      url += req.url;
    }
    else {
      url += "/" + req.url;
    }
    
    var prerequest = {
      method: req.method,
      url: url,
      json: true,
      body: req.body
    };
    if (xToken) {
      prerequest.headers = {
        'AUTHORIZATION': 'xToken ' + xToken
      };
    }
    
//    console.log();
//    console.log();
//    console.log();
//    console.log('proxing', req.body, req.method, prerequest); //, form);
    request(prerequest, function (error, response, body) {
//      console.log('---');
//      console.log(error, response.toJSON(), body);
      if (response) {
        if (body) {
          if (body.access_token) {
            xToken = body.access_token;
          }
        }
        return res.status(response.statusCode).json(body);
      }
      return res.status(500).json(error);
    });
  })
  
  app.listen(3000);
  
})();
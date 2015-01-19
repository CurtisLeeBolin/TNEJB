#!/usr/bin/env node

var express = require('express'),
  http = require('http'),
  path = require('path')

var app = express();

app.set('port', process.env.PORT || 3001);
app.enable('trust proxy');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.get('/', function (req, res) {
  res.render('home');
  console.log(req.ip + ': Requested /')
});

app.get('/about/', function (req, res) {
  res.render('about');
});

app.get('/contact/', function (req, res) {
  res.render('contact');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

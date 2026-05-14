var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo');
var mongoose = require('mongoose');
var ejsLocals = require('ejs-locals');

var index = require('./routes/index');
var parts = require('./routes/parts');

var createNav = require('./middleware/createNav');
var createUser = require('./middleware/createUser');

var app = express();

mongoose.connect('mongodb://127.0.0.1/marketplace');

app.engine('ejs', ejsLocals);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'marketplace-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/marketplace' })
}));

app.use(createNav);
app.use(createUser);
app.use(function(req, res, next) {
  res.locals.title = 'АвтоДеталь';
  next();
});

app.use('/', index);
app.use('/parts', parts);

app.use(function(req, res, next) {
  var err = new Error('Страница не найдена');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', {
    title: err.status === 404 ? 'Страница не найдена' : 'Ошибка'
  });
});

module.exports = app;

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Маркетплейс автозапчастей запущен на порту ' + port);
});

var express = require('express');
var router = express.Router();
var Part = require('../models/Part');
var User = require('../models/User');

router.get('/', function(req, res, next) {
  Part.find({}).sort({ created: -1 }).limit(8).exec(function(err, recentParts) {
    if (err) return next(err);
    res.render('index', {
      title: 'Маркетплейс автозапчастей',
      recentParts: recentParts
    });
  });
});

router.get('/logreg', function(req, res, next) {
  if (req.session.userId) {
    return res.redirect('/');
  }
  res.render('logreg', {
    title: 'Вход / Регистрация',
    error: null
  });
});

router.post('/logreg', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  if (!username || !password) {
    return res.render('logreg', {
      title: 'Вход / Регистрация',
      error: 'Введите логин и пароль'
    });
  }

  User.findOne({ username: username }, function(err, user) {
    if (err) return next(err);

    if (user) {
      if (user.checkPassword(password)) {
        req.session.userId = user._id;
        return res.redirect('/');
      } else {
        return res.render('logreg', {
          title: 'Вход / Регистрация',
          error: 'Неверный пароль'
        });
      }
    } else {
      var newUser = new User({ username: username });
      newUser.password = password;
      newUser.save(function(err) {
        if (err) return next(err);
        req.session.userId = newUser._id;
        res.redirect('/');
      });
    }
  });
});

router.post('/logout', function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;

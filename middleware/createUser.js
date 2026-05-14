var User = require('../models/User');

module.exports = function(req, res, next) {
  res.locals.user = null;
  if (req.session && req.session.userId) {
    User.findById(req.session.userId, function(err, user) {
      if (!err && user) {
        res.locals.user = user;
      }
      next();
    });
  } else {
    next();
  }
};

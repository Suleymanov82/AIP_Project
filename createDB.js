var async = require('async');
var mongoose = require('mongoose');
var Part = require('./models/Part');
var data = require('./data');

async.series([
  function open(cb) {
    mongoose.connect('mongodb://127.0.0.1/marketplace', cb);
  },
  function dropDatabase(cb) {
    mongoose.connection.db.dropDatabase(cb);
  },
  function requireModels(cb) {
    Part.ensureIndexes(cb);
  },
  function createParts(cb) {
    async.each(data, function(partData, next) {
      var part = new Part(partData);
      part.save(next);
    }, cb);
  }
], function(err) {
  if (err) {
    console.error('Ошибка при создании БД:', err);
  } else {
    console.log('База данных успешно создана! Добавлено ' + data.length + ' запчастей.');
  }
  mongoose.disconnect();
});

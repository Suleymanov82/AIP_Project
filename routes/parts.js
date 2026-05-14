var express = require('express');
var router = express.Router();
var Part = require('../models/Part');
var checkAuth = require('../middleware/checkAuth');

var categories = ['Двигатель', 'Трансмиссия', 'Тормозная система', 'Подвеска', 'Электрика', 'Кузов', 'Охлаждение', 'Топливная система'];

router.get('/add/new', checkAuth, function(req, res, next) {
  res.render('add', {
    title: 'Добавить запчасть',
    categories: categories,
    error: null
  });
});

router.post('/add/new', checkAuth, function(req, res, next) {
  var part = new Part({
    title: req.body.title,
    category: req.body.category,
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year || null,
    price: req.body.price,
    condition: req.body.condition,
    description: req.body.description,
    image: req.body.image || 'https://placehold.co/400x300?text=Запчасть',
    seller: req.session.userId
  });

  part.save(function(err) {
    if (err) {
      return res.render('add', {
        title: 'Добавить запчасть',
        categories: categories,
        error: 'Ошибка при сохранении. Проверьте все поля.'
      });
    }
    res.redirect('/parts/' + part._id);
  });
});

router.get('/', function(req, res, next) {
  var query = {};
  var sortOption = { created: -1 };

  if (req.query.search) {
    query.$or = [
      { title: new RegExp(req.query.search, 'i') },
      { brand: new RegExp(req.query.search, 'i') },
      { model: new RegExp(req.query.search, 'i') },
      { description: new RegExp(req.query.search, 'i') }
    ];
  }

  if (req.query.category) {
    query.category = req.query.category;
  }

  if (req.query.brand) {
    query.brand = new RegExp(req.query.brand, 'i');
  }

  if (req.query.condition) {
    query.condition = req.query.condition;
  }

  if (req.query.minPrice || req.query.maxPrice) {
    query.price = {};
    if (req.query.minPrice) query.price.$gte = Number(req.query.minPrice);
    if (req.query.maxPrice) query.price.$lte = Number(req.query.maxPrice);
  }

  if (req.query.sort === 'price_asc') sortOption = { price: 1 };
  else if (req.query.sort === 'price_desc') sortOption = { price: -1 };
  else if (req.query.sort === 'newest') sortOption = { created: -1 };

  Part.find(query).sort(sortOption).exec(function(err, parts) {
    if (err) return next(err);
    res.render('parts', {
      title: 'Каталог запчастей',
      parts: parts,
      categories: categories,
      query: req.query
    });
  });
});

router.get('/:id', function(req, res, next) {
  Part.findById(req.params.id).populate('seller').exec(function(err, part) {
    if (err) return next(err);
    if (!part) {
      var e = new Error('Запчасть не найдена');
      e.status = 404;
      return next(e);
    }
    res.render('part', {
      title: part.title,
      part: part,
      categories: categories
    });
  });
});

module.exports = router;

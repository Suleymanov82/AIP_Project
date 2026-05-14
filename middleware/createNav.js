module.exports = function(req, res, next) {
  res.locals.navCategories = [
    { name: 'Двигатель',         icon: '<i class="fa-solid fa-gears"></i>' },
    { name: 'Трансмиссия',       icon: '<i class="fa-solid fa-gear"></i>' },
    { name: 'Тормозная система', icon: '<i class="fa-solid fa-circle-stop"></i>' },
    { name: 'Подвеска',          icon: '<i class="fa-solid fa-car-side"></i>' },
    { name: 'Электрика',         icon: '<i class="fa-solid fa-bolt"></i>' },
    { name: 'Кузов',             icon: '<i class="fa-solid fa-car"></i>' },
    { name: 'Охлаждение',        icon: '<i class="fa-solid fa-fan"></i>' },
    { name: 'Топливная система', icon: '<i class="fa-solid fa-gas-pump"></i>' }
  ];
  next();
};

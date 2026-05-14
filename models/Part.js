var mongoose = require('mongoose');

var partSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Двигатель', 'Трансмиссия', 'Тормозная система', 'Подвеска', 'Электрика', 'Кузов', 'Охлаждение', 'Топливная система']
  },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number },
  price: { type: Number, required: true },
  condition: {
    type: String,
    required: true,
    enum: ['Новая', 'Б/у', 'На восстановление']
  },
  description: { type: String },
  image: { type: String, default: 'https://placehold.co/400x300?text=Запчасть' },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Part', partSchema);

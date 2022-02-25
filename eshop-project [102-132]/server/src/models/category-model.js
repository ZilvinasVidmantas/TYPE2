const Mongoose = require('mongoose');

const categorySchema = new Mongoose.Schema({
  title: 'string',
}, {
  timestamps: true,
});

const CategoryModel = Mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
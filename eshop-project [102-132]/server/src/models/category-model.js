const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new Mongoose.Schema({
  title: 'string',
}, {
  timestamps: true,
});

categorySchema.plugin(uniqueValidator);

const CategoryModel = Mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
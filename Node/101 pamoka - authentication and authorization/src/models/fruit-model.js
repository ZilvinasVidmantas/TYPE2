const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const fruitSchema = new Mongoose.Schema({
  name: {
    type: 'string',
    required: true,
    unique: true,
  },
  price: {
    type: 'number',
    required: true,
  },
}, {
  timestamps: true,
});

fruitSchema.plugin(uniqueValidator);

const FruitModel = Mongoose.model('Fruit', fruitSchema);

module.exports = FruitModel;
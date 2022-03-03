const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const citySchema = new Mongoose.Schema({
  title: {
    type: 'string',
    unique: true,
  },
}, {
  timestamps: true,
});

citySchema.plugin(uniqueValidator);

const CityModel = Mongoose.model('City', citySchema);

module.exports = CityModel;
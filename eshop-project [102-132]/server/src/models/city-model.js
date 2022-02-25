const Mongoose = require('mongoose');

const citySchema = new Mongoose.Schema({
  title: 'string',
}, {
  timestamps: true,
});

const CityModel = Mongoose.model('City', citySchema);

module.exports = CityModel;
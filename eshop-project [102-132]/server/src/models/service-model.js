const Mongoose = require('mongoose');

const serviceSchema = new Mongoose.Schema({
  title: 'string',
  price: 'number',
  images: [{
    src: 'string',
  }],
  category: {
    type: Mongoose.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  cities: [{
    type: Mongoose.Types.ObjectId,
    ref: 'City',
  }]
}, {
  timestamps: true,
});

const ServiceModel = Mongoose.model('Service', serviceSchema);

module.exports = ServiceModel;
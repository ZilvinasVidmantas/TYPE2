const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const imageSchema = new Mongoose.Schema({
  src: {
    type: 'string',
    unique: true,
  },
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

imageSchema.plugin(uniqueValidator);

const ImageModel = Mongoose.model('Image', imageSchema);

module.exports = ImageModel;
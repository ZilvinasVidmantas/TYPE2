const Mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validator = require('validator');

const userSchema = new Mongoose.Schema({
  email: {
    type: 'string',
    required: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: 'Incorrect email format',
    },
    unique: true,
  },
  name: {
    type: 'string',
    required: true,
  },
  surname: {
    type: 'string',
    required: true,
  },
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator);

const UserModel = Mongoose.model('User', userSchema);

module.exports = UserModel;
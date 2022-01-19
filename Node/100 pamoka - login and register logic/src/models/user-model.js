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
  password: {
    type: 'string',
    required: true,
    validate: [
      { validator: (value) => value.length >= 8, message: 'Min 8 characters' },
      { validator: (value) => value.length <= 32, message: 'Max 32 characters' },
      { validator: (value) => value.length <= 32, message: 'Max 32 characters' },
      { validator: (value) => /^.*[0-9].*$/.test(value), message: 'At least one number' },
      { validator: (value) => /^.*[A-ZĄČĘĖĮŠŲŪŽ].*$/.test(value), message: 'At least one capital letter' },
    ],
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
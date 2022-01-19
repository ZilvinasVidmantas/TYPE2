const bcrypt = require('bcrypt');

const { HASH_SECRET } = process.env;
const saltRounds = 5;

const hashPasswordAsync = async (password) => await bcrypt.hash(password + HASH_SECRET, saltRounds);

module.exports = {
  hashPasswordAsync,
};

const jwt = require('jsonwebtoken');

const generateToken = ({ email, role }) => {
  if (email && role) {
    const token = jwt.sign({ email, role }, process.env.TOKEN_SECRET);
    return token;
  }
  return null;
}

const decryptToken = (token) = jwt.verify(token, process.env.TOKEN_SECRET);

module.exports = {
  generateToken,
  decryptToken,
};
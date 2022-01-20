const jwt = require('jsonwebtoken');

const generateToken = ({ email, role }) => {
  if(email && role) {
    const token = jwt.sign({ email, role }, process.env.TOKEN_SECRET);
    return token;
  }
  return null;
}

module.exports = generateToken;
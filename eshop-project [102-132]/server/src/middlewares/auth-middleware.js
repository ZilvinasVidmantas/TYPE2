const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    res.status(403).json({ message: 'Auth needed' });
    return;
  };

  const token = authorizationHeader && authorizationHeader.split(' ')[1];
  if (!token) {
    res.status(400).json({ message: 'Bad auth data' });
    return
  }

  try {
    const decodedUser = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = decodedUser;
    next();
  } catch (error) {
    res.status(400).json({ meesage: 'Invalid token' });
  }
};

module.exports = authMiddleware;
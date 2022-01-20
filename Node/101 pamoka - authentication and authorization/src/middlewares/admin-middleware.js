const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    res.status(403).json({
      message: 'You must be Admin to acceess request'
    });
    return;
  }

  next();
};

module.exports = adminMiddleware;

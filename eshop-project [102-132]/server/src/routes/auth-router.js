const express = require('express');
const {
  register,
  login,
  auth,
  checkEmail,
  resetPassword,
} = require('../controllers/auth-controller');
const authConfigureMiddleware = require('../middlewares/auth-congifure-middleware');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');

const router = express.Router();
router.use(authConfigureMiddleware);

router.post('/', auth);

router.post('/register', register);

router.post('/login', login);

router.post('/resetPassword/:userId', authMiddleware, adminMiddleware, resetPassword);

router.get('/check-email', checkEmail);

module.exports = router;

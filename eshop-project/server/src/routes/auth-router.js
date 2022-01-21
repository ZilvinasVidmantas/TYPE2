const express = require('express');
const {
  register,
  login,
  auth,
} = require('../controllers/auth-controller');
const authConfigureMiddleware = require('../middlewares/auth-congifure-middleware');

const router = express.Router();
router.use(authConfigureMiddleware);


// POST - /api/auth/register
router.post('/', auth);

// POST - /api/auth/register
router.post('/register', register);

// POST - /api/auth/login
router.post('/login', login);

module.exports = router;
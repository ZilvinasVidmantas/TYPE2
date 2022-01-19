const express = require('express');
const {
  register
} = require('../controllers/auth-controller');

const router = express.Router();

// POST - /api/auth/register
router.post('/register', register);

module.exports = router;
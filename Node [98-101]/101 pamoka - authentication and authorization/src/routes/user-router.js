const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
  getUsers
} = require('../controllers/user-controller');

const router = express.Router();

// middlewares
router.use(authMiddleware);

router.get('/', adminMiddleware, getUsers);

module.exports = router;

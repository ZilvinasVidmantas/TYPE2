const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
  getUsers,
  updateUser,
  updateUserMainImage,
} = require('../controllers/user-controller');

const router = express.Router();

// middlewares
router.use(authMiddleware);

router.get('/', adminMiddleware, getUsers);

router.patch('/', updateUser);

router.patch('/mainImg/:mainImg', updateUserMainImage);

module.exports = router;

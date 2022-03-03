const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
  getUsers,
  updateUser,
  updateUserMainImage,
  deleteUser,
} = require('../controllers/user-controller');

const router = express.Router();

// middlewares
router.use(authMiddleware);

router.get('/', adminMiddleware, getUsers);

router.patch('/', updateUser);

router.patch('/mainImg/:mainImg', updateUserMainImage);

router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;

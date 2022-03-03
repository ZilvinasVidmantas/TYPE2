const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/category-controller');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getCategories);

router.post('/', adminMiddleware, createCategory);

router.patch('/:id', adminMiddleware, updateCategory);

router.delete('/:id', adminMiddleware, deleteCategory);

module.exports = router;

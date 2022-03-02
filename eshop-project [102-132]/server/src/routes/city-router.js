const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
const {
  getCities,
  createCity,
  updateCity,
  deleteCity
} = require('../controllers/city-controller');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getCities);

router.post('/', adminMiddleware, createCity);

router.patch('/:id', adminMiddleware, updateCity);

router.delete('/:id', adminMiddleware, deleteCity);

module.exports = router;

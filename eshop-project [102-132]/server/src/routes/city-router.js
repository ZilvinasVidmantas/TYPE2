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

router.use(authMiddleware, adminMiddleware);

router.get('/', getCities);

router.post('/', createCity);

router.patch('/:id', updateCity);

router.delete('/:id', deleteCity);

module.exports = router;

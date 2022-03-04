const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');
const {
  getServices,
  createUserService,
  getUserServices,
} = require('../controllers/service-controller');

const router = express.Router();

router.get('/', getServices);
router.post('/userServices', authMiddleware, uploadManyMiddleware('images'), createUserService);
router.get('/userServices', authMiddleware, getUserServices);

module.exports = router;

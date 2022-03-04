const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');
const {
  createUserService,
} = require('../controllers/service-controller');

const router = express.Router();

router.post('/userService', authMiddleware, uploadManyMiddleware('images'), createUserService);

module.exports = router;

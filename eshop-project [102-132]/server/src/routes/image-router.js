const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { uploadManyMiddleware } = require('../middlewares/upload-middleware');
const { 
  getImages,
  uploadImages,
} = require('../controllers/image-controller');

const router = express.Router();

// middlewares
router.use(authMiddleware);

router.get('/', getImages);

router.post('/', uploadManyMiddleware('files'), uploadImages)

module.exports = router;

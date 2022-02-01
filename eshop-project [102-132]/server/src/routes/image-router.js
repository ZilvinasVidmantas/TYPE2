const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const {
  getImages
} = require('../controllers/image-controller');

const router = express.Router();

// middlewares
router.use(authMiddleware);

router.get('/', getImages);


module.exports = router;

const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { getImages } = require('../controllers/image-controller');
const multer = require('multer');

const upload = multer({ dest: 'public/images/' })

const router = express.Router();

// middlewares
router.use(authMiddleware);

router.get('/', getImages);

router.post('/', upload.single('image'), (req, res) => {
  console.log('req.file');
  console.log(req.file);
  console.log('req.body');
  console.log(req.body);

  res.status(200).send('O.K.');
})

module.exports = router;

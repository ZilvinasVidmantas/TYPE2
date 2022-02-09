const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { getImages } = require('../controllers/image-controller');
const multer = require('multer');

const upload = multer({ dest: 'public/images/' })

const router = express.Router();

// middlewares
router.use(authMiddleware);

router.get('/', getImages);

router.post('/', upload.array('files'), (req, res) => {
  console.log(req.files);

  res.status(200).send('O.K.');
})

module.exports = router;

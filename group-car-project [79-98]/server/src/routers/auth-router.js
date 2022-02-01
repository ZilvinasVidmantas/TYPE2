const {Router} = require('express');
const {login} = require('../controllers/auth-controller.js')

const router = Router();

// http://localhost:5000/auth/login | POST
router.post('/sign-in', login);

module.exports = router;
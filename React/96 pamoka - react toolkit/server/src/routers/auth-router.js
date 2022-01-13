import { Router } from 'express';
import { login, register, checkEmail } from '../controllers/auth-controller.js';

const router = Router();

// http://localhost:5000/auth/login | POST
router.post('/login', login);

// http://localhost:5000/auth/register | POST
router.post('/register', register);

// http://localhost:5000/auth/check-email | GET
router.get('/check-email', checkEmail);

export default router;
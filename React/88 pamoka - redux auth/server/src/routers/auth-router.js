import { Router } from 'express';
import { login, register} from '../controllers/auth-controller.js';

const router = Router();

// http://localhost:5000/auth/login | POST
router.post('/login', login);

// http://localhost:5000/auth/register | POST
router.post('/register', register);

export default router;
import { Router } from 'express';
import { login, register} from '../controllers/auth-controller.js';

const router = Router();

// https://localhost:5000/auth/login | GET
router.get('/login', login);

// https://localhost:5000/auth/register | POST
router.post('/register', register);

export default router;
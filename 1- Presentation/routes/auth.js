import express from 'express';
const router = express.Router();
import authController from '../authController.js';

router.post('/signup', authController.signup_post);

router.post('/login', authController.login_post);

router.post('/logout', authController.signout_post);
export default router;
import express from 'express';
const router = express.Router();
import authController from '../authController.js';

router.post('/logout', authController.signout_post);

export default router;
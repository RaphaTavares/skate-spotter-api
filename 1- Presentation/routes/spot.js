import express from 'express';
const router = express.Router();
import spotController from '../spotController.js';

router.post('/createSpot', spotController.signup_post);

router.post('/login', spotController.login_post);

export default router;
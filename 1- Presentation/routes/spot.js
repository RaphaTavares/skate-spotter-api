import express from 'express';
const router = express.Router();
import spotController from '../spotController.js';

const baseUrl = "spot";
router.get(`/${baseUrl}/getAll`, spotController.get_all);

router.get(`/${baseUrl}/getById`, spotController.get_by_id);

export default router;
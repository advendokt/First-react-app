import express from 'express';
import { getServices, fetchServiceById, createService, removeService } from '../controllers/serviceController.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/services', getServices);
router.get('/services/:id', fetchServiceById);
router.post('/services', upload.single('image'), createService); // Use upload.single('image') to handle optional image uploads
router.delete('/services/:id', removeService);

export default router;
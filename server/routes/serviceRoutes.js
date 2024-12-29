import express from 'express';
import { getServices, getServiceById, addService, deleteService } from '../controllers/serviceController.js';

const router = express.Router();

router.get('/services', getServices);
router.get('/services/:id', getServiceById);
router.post('/services', addService);
router.delete('/services/:id', deleteService);

export default router;
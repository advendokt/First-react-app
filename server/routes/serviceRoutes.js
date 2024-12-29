// server/routes/serviceRoutes.js
import express from 'express';
import { getServices, addService, deleteService } from '../controllers/serviceController.js';

const router = express.Router();

// Маршруты для работы с сервисами
router.get('/services', getServices);
router.post('/services', addService);
router.delete('/services/:id', deleteService);

export default router;

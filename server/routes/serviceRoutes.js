// serviceRoutes.js
import express from 'express';
import { createService, getServices, removeService } from '../controllers/serviceController.js';

const router = express.Router();

// Маршрут для получения всех сервисов
router.get('/services', getServices);

// Маршрут для добавления нового сервиса
router.post('/services', createService);

// Маршрут для удаления сервиса
router.delete('/services/:id', removeService);

export default router;

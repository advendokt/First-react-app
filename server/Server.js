import express from 'express';
import { getServices, addService, deleteService } from '../src/serviceController.js'; // исправьте путь, если необходимо
import db from './db.js';  // если db.js находится в той же папке

const app = express();
app.use(express.json());

// Обработчики маршрутов
app.get('/services', getServices);
app.post('/services', addService);
app.delete('/services/:id', deleteService);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

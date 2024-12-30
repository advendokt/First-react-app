import express from 'express';
import path from 'path';
import serviceRoutes from './routes/serviceRoutes.js';
import cors from 'cors';

const app = express(); // Move this line here

// Настройка парсинга тела запроса (для обработки JSON)
app.use(express.json());

// Раздача статичных файлов из папки 'uploads'
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Enable CORS for all routes
app.use(cors());

// Использование маршрутов для работы с сервисами
app.use('/api', serviceRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

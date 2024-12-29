// server/Server.js
import express from 'express';
import serviceRoutes from './routes/serviceRoutes.js';
import cors from 'cors';

const app = express();

// Используйте CORS, чтобы разрешить запросы с фронтенда
app.use(cors());
app.use(express.json()); // Для парсинга JSON в теле запроса

// Используем маршруты
app.use(serviceRoutes);

const port = 5001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

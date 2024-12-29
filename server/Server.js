// Импортируем необходимые модули
import express from 'express'; // для создания сервера
import cors from 'cors'; // для разрешения CORS запросов
import serviceRoutes from './routes/serviceRoutes.js'; // Import the routes

// Создаём приложение Express
const app = express();

// Настройки CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Разрешаем доступ с фронтенда
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешённые методы
  allowedHeaders: ['Content-Type', 'Authorization'], // Разрешённые заголовки
};

// Используем CORS с указанными настройками
app.use(cors(corsOptions));

// Middleware для парсинга JSON в теле запроса
app.use(express.json());

// Используем маршруты
app.use('/api', serviceRoutes); // Use the routes

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

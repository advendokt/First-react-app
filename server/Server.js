import express from 'express'; // для создания сервера
import cors from 'cors'; // для разрешения CORS запросов
import multer from 'multer'; // Для загрузки файлов
import serviceRoutes from './routes/serviceRoutes.js'; // Импорт маршрутов
import mysql from 'mysql2'; // Для подключения к MySQL

const app = express();

// Настройки CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Разрешаем доступ с фронтенда
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешённые методы
  allowedHeaders: ['Content-Type', 'Authorization'], // Разрешённые заголовки
};

app.use(cors(corsOptions));

// Настройка multer для загрузки файлов
const upload = multer({ dest: 'uploads/' });

// Middleware для обработки загрузки файлов и текста
app.post('/api/services', upload.single('image'), (req, res) => {
  console.log(req.body); // Выводим текстовые данные формы
  console.log(req.file); // Выводим информацию о файле

  // Проверяем, что все необходимые данные есть
  if (!req.body.name || !req.body.description || !req.body.price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Логика для добавления сервиса в базу данных MySQL
  const { name, description, price } = req.body;
  const imagePath = req.file.path;

  const query = 'INSERT INTO services (name, description, price, image_path) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, description, price, imagePath], (err, results) => {
    if (err) {
      console.error('Error inserting service:', err);
      return res.status(500).json({ error: 'Error adding service', details: err.message });
    }

    res.status(201).json({
      message: 'Service added successfully',
      service: {
        id: results.insertId,
        name,
        description,
        price,
        imagePath,
      },
    });
  });
});

// Используем express.json() только для маршрутов, которые не связаны с файлами
app.use(express.json());

// Используем маршруты
app.use('/api', serviceRoutes); // Подключение других маршрутов

// Обработчик ошибок 500 для удобства
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!', details: err.message });
});

// Подключение к базе данных MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin', // Ваш MySQL пользователь
  password: '12345678', // Ваш MySQL пароль
  database: 'yourdbname', // Ваша база данных
});

// Подключаемся к базе данных
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    process.exit(1); // Останавливаем сервер, если не можем подключиться
  }
  console.log('Database connected successfully');
});

// Запуск сервера на порту 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

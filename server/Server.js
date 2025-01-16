import express from 'express';
import path from 'path';
import serviceRoutes from './routes/serviceRoutes.js';
import cors from 'cors';
import multer from 'multer';

// Настройка multer для обработки изображений
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const app = express();

app.use(cors());
app.use(express.json());

// Раздача статичных файлов из папки 'uploads'
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Использование маршрутов для работы с сервисами
app.use('/api', serviceRoutes);

// Путь для добавления нового сервиса с изображением
app.post('/api/services', upload.single('image'), (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.path : null; // Если изображение не было отправлено, оно будет null

  // Логика для сохранения данных в базе данных или другим способом
  const newService = { name, description, price, image };

  // Вернуть созданный сервис
  res.json({ service: newService });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

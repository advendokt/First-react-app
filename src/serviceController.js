import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Создаем приложение Express
const app = express();

// Middleware
app.use(cors()); // Разрешаем кросс-доменные запросы
app.use(bodyParser.json()); // Парсим JSON в теле запроса

// Массив для хранения данных сервисов (имитация базы данных)
let services = [
  { id: 1, name: 'Service 1', description: 'Description 1', price: 100 },
  { id: 2, name: 'Service 2', description: 'Description 2', price: 200 },
];

// Возвращаем список всех сервисов
app.get('/api/services', (req, res) => {
  res.json(services);
});

// Добавляем новый сервис
app.post('/api/services', (req, res) => {
  const { name, description, price } = req.body;

  // Проверка на наличие обязательных полей
  if (!name || !description || !price) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newService = { id: services.length + 1, name, description, price };
  services.push(newService);
  res.status(201).json(newService);
});

// Удаляем сервис по ID
app.delete('/api/services/:id', (req, res) => {
  const { id } = req.params;
  const serviceIndex = services.findIndex(service => service.id === parseInt(id));

  if (serviceIndex === -1) {
    return res.status(404).json({ error: 'Service not found' });
  }

  services.splice(serviceIndex, 1);
  res.status(200).send();
});

// Запуск сервера
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

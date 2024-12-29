// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let services = [
  { id: 1, name: 'Service 1', description: 'Description of Service 1' },
  { id: 2, name: 'Service 2', description: 'Description of Service 2' },
  { id: 3, name: 'Service 3', description: 'Description of Service 3' },
];

// Получить все сервисы
app.get('/services', (req, res) => {
  res.json(services);
});

// Получить сервис по ID
app.get('/services/:id', (req, res) => {
  const service = services.find((s) => s.id === parseInt(req.params.id));
  if (service) {
    res.json(service);
  } else {
    res.status(404).json({ error: 'Service not found' });
  }
});

// Добавить новый сервис
app.post('/services', (req, res) => {
  const { name, description } = req.body;
  const newService = { id: services.length + 1, name, description };
  services.push(newService);
  res.status(201).json(newService);
});

// Удалить сервис
app.delete('/services/:id', (req, res) => {
  services = services.filter((service) => service.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

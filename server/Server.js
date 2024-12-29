import express from 'express';
import cors from 'cors';

const app = express();
const port = 5001;


app.use(cors({ origin: 'http://localhost:5000' }));


app.use(cors());
app.use(express.json());

let services = [
  { id: 1, name: 'Service 1', description: 'Description of Service 1', price: 100 },
  { id: 2, name: 'Service 2', description: 'Description of Service 2', price: 200 },
  { id: 3, name: 'Service 3', description: 'Description of Service 3', price: 300 },
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
  const { name, description, price } = req.body;
  const newService = { id: services.length + 1, name, description, price };
  services.push(newService);
  res.status(201).json(newService);
});

// Удалить сервис
app.delete('/services/:id', (req, res) => {
  const serviceId = parseInt(req.params.id);
  const serviceIndex = services.findIndex((service) => service.id === serviceId);
  if (serviceIndex !== -1) {
    services.splice(serviceIndex, 1);
    return res.status(204).send();
  }
  res.status(404).json({ error: 'Service not found' });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

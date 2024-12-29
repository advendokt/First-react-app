// server/controllers/serviceController.js
export const getServices = (req, res) => {
  // Пример ответа с сервисами
  const services = [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' }
  ];
  res.json(services);
};

export const addService = (req, res) => {
  const newService = req.body; // получаем данные нового сервиса
  // Добавьте логику для добавления сервиса в базу данных или в память
  res.status(201).json(newService);
};

export const deleteService = (req, res) => {
  const { id } = req.params;
  // Добавьте логику для удаления сервиса
  res.status(200).send(`Service with id ${id} deleted`);
};

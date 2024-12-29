import React, { useState, useEffect } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';

function AdminPanel({ servicesmore, addService, removeService }) {
  const [newService, setNewService] = useState({ title: '', description: '', price: '' });
  const [loading, setLoading] = useState(false);

  // Используем локальное состояние для списка услуг
  const [updatedServices, setUpdatedServices] = useState(servicesmore);

  // Обновляем локальное состояние при изменении servicesmore
  useEffect(() => {
    setUpdatedServices(servicesmore);
  }, [servicesmore]);

  const handleChange = (e) => {
    setNewService({
      ...newService,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddService = async () => {
    if (newService.title && newService.description && newService.price) {
      setLoading(true);
      
      // Отправка POST-запроса на сервер для добавления услуги
      const response = await fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newService),
      });

      if (response.ok) {
        const addedService = await response.json();

        // Обновляем локальное состояние только после успешного добавления услуги
        setUpdatedServices((prevServices) => {
          // Проверка на дублирование
          if (!prevServices.some((service) => service.id === addedService.id)) {
            return [...prevServices, addedService];
          }
          return prevServices;
        });

        // Добавляем услугу в родительский компонент
        addService(addedService);

        // Очищаем форму
        setNewService({ title: '', description: '', price: '' });
      } else {
        console.error('Ошибка при добавлении услуги');
      }

      setLoading(false);
    }
  };

  const handleRemoveService = async (id) => {
    setLoading(true);

    // Отправка DELETE-запроса на сервер для удаления услуги
    const response = await fetch(`http://localhost:5000/services/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Услуга удалена с сервера');

      // Удаляем услугу из локального состояния
      setUpdatedServices((prevServices) => {
        return prevServices.filter((service) => service.id !== id);
      });

      // Удаляем услугу из родительского компонента
      removeService(id);
    } else {
      console.error('Ошибка при удалении услуги');
    }

    setLoading(false);
  };

  return (
    <Container>
      <h1>Админ-панель</h1>
      <h3>Добавить новую услугу</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Название услуги</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newService.title}
            onChange={handleChange}
            placeholder="Введите название услуги"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={newService.description}
            onChange={handleChange}
            placeholder="Введите описание услуги"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Цена</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={newService.price}
            onChange={handleChange}
            placeholder="Введите цену услуги"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddService} disabled={loading}>
          {loading ? 'Добавление...' : 'Добавить услугу'}
        </Button>
      </Form>

      <h3 className="mt-4">Список услуг</h3>
      <div className="row">
        {updatedServices && updatedServices.map((service) => (
          <div className="col-md-4" key={service.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text>
                  <strong>Цена:</strong> {service.price}
                </Card.Text>
                <Button 
                  variant="danger" 
                  onClick={() => handleRemoveService(service.id)} 
                  disabled={loading}
                >
                  {loading ? 'Удаление...' : 'Удалить'}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AdminPanel;

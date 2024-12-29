// src/pages/ServiceMore.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Для получения параметра из URL
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ServiceMore = () => {
  const { id } = useParams(); // Получаем ID из URL
  const { t } = useTranslation();
  const [service, setService] = useState(null);
  const [error, setError] = useState(null);
  const [newService, setNewService] = useState({ name: '', description: '' });

  // Загрузка данных о сервисе
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/services/${id}`);
        setService(response.data);
      } catch (err) {
        setError(t('serviceNotFound'));
        console.error('Error fetching service:', err);
      }
    };

    fetchService();
  }, [id]);

  // Обработчик добавления нового сервиса
  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/services', newService);
      setService(response.data);
      setNewService({ name: '', description: '' });
    } catch (err) {
      setError('Error adding service');
    }
  };

  // Обработчик удаления сервиса
  const handleDeleteService = async () => {
    try {
      await axios.delete(`http://localhost:5000/services/${id}`);
      setService(null);
      setError('Service deleted');
    } catch (err) {
      setError('Error deleting service');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-5">
      <h1>{service.name}</h1>
      <p>{service.description}</p>

      {/* Добавление нового сервиса */}
      <form onSubmit={handleAddService}>
        <input
          type="text"
          placeholder="Service Name"
          value={newService.name}
          onChange={(e) => setNewService({ ...newService, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Service Description"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
        />
        <button type="submit">Add Service</button>
      </form>

      {/* Кнопка для удаления сервиса */}
      <button onClick={handleDeleteService} className="btn btn-danger">Delete Service</button>
    </div>
  );
};

export default ServiceMore;

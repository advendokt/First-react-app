// src/admin/AdminPanel.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);

    // Загрузка сервисов с сервера
    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await axios.get('http://localhost:5000/services');
          setServices(response.data);
        } catch (err) {
          setError('Error loading services');
        }
      };
      fetchServices();
    }, []);

    // Добавление нового сервиса
    const handleAddService = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/services', newService);
        setServices([...services, response.data]);
        setNewService({ name: '', description: '' });
      } catch (err) {
        setError('Error adding service');
      }
    };

    // Удаление сервиса
    const handleDeleteService = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/services/${id}`);
        setServices(services.filter((service) => service.id !== id));
      } catch (err) {
        setError('Error deleting service');
      }
    };

    return (
      <div className="container py-5">
        <h2>Admin Panel</h2>
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

        {error && <p>{error}</p>}

        <h3>Services List</h3>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <h5>{service.name}</h5>
              <p>{service.description}</p>
              <button onClick={() => handleDeleteService(service.id)}>Delete</button>
              <button onClick={() => history.push(`/service-more/${service.id}`)}>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default AdminPanel;

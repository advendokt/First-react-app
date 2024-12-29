import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = ({ servicesmore, setServicesmore, removeService }) => {
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const [error, setError] = useState('');

  // Удаляем дублирующиеся сервисы
  const uniqueServices = servicesmore.filter(
    (service, index, self) =>
      index === self.findIndex((s) => s.id === service.id)
  );

  const handleAddService = async (e) => {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      try {
        const response = await axios.post('http://localhost:3000/api/services', newService);
        setNewService({ name: '', description: '', price: '' });
        setError('');
        setServicesmore([...servicesmore, response.data]); // Update the services list
        console.log('Service added:', response.data);
      } catch (err) {
        setError('Error adding service');
        console.error('Error adding service:', err.response ? err.response.data : err); // Log the error
      }
    } else {
      setError('All fields are required');
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      {error && <div className="error">{error}</div>}

      <div className="add-service-form">
        <h3>Add New Service</h3>
        <form onSubmit={handleAddService}>
          <input
            type="text"
            placeholder="Service Name"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          />
          <textarea
            placeholder="Service Description"
            value={newService.description}
            onChange={(e) => setNewService({ ...newService, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Service Price"
            value={newService.price}
            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
          />
          <button type="submit">Add Service</button>
        </form>
      </div>

      <div className="services-list">
        <h3>Current Services</h3>
        <ul>
          {uniqueServices.map((service, index) => (
            <li key={service.id || `service-${index}`}>
              <div>
                <strong>{service.name}</strong>: {service.description}
                <span className="service-price">${service.price}</span>
              </div>
              <button onClick={() => removeService(service.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

AdminPanel.propTypes = {
  servicesmore: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  setServicesmore: PropTypes.func.isRequired,
  removeService: PropTypes.func.isRequired,
};

export default AdminPanel;

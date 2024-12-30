import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = ({ servicesmore, setServicesmore, removeService }) => {
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  // Удаляем дублирующиеся сервисы
  const uniqueServices = servicesmore.filter(
    (service, index, self) =>
      index === self.findIndex((s) => s.id === service.id)
  );

  const handleAddService = async (e) => {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      // Validate price
      if (isNaN(newService.price) || parseFloat(newService.price) <= 0) {
        setError('Price must be a positive number');
        return;
      }

      const formData = new FormData();
      formData.append('name', newService.name);
      formData.append('description', newService.description);
      formData.append('price', newService.price);
      if (image) {
        formData.append('image', image); // Ensure the field name matches the server-side code
      }

      console.log('Form data:', newService, image); // Log the form data for debugging

      try {
        const response = await axios.post('http://localhost:3000/api/services', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setNewService({ name: '', description: '', price: '' });
        setImage(null);
        setError('');
        setServicesmore((prevServices) => [...prevServices, response.data.service]); // Update the services list
        console.log('Service added:', response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Error adding service');
        console.error('Error adding service:', err.response ? err.response.data : err);
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
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
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
              <button onClick={() => removeService(service.id)}>Delete</button> {/* Ensure the id is passed correctly */}
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

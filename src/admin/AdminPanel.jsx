import React, { useState } from 'react';
import './AdminPanel.css';

const AdminPanel = ({ servicesmore, addService, removeService }) => {
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const [error, setError] = useState('');

  const handleAddService = (e) => {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      addService(newService);
      setNewService({ name: '', description: '', price: '' });
      setError('');
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
          {servicesmore.map((service) => (
            <li key={service.id}>
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

export default AdminPanel;

import React, { useState } from 'react';
import './AdminPanel.css'; // Добавим файл стилей для панели администратора

const AdminPanel = ({ servicesmore, addService, removeService }) => {
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({ ...prevService, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      addService(newService);
      setNewService({ name: '', description: '', price: '' }); // Clear form
    }
  };

  return (
    <div className="admin-panel">
      <h2 className="admin-title">Admin Panel</h2>

      {/* Add Service Form */}
      <form className="add-service-form" onSubmit={handleSubmit}>
        <h3>Add New Service</h3>
        <div className="input-group">
          <label>Service Name</label>
          <input
            type="text"
            name="name"
            value={newService.name}
            onChange={handleChange}
            placeholder="Enter service name"
            required
          />
        </div>
        <div className="input-group">
          <label>Service Description</label>
          <textarea
            name="description"
            value={newService.description}
            onChange={handleChange}
            placeholder="Enter service description"
            required
          />
        </div>
        <div className="input-group">
          <label>Service Price</label>
          <input
            type="number"
            name="price"
            value={newService.price}
            onChange={handleChange}
            placeholder="Enter service price"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Add Service</button>
      </form>

      {/* Services List */}
      <h3>Services</h3>
      <ul className="services-list">
        {servicesmore.map((service) => (
          <li key={service.id} className="service-item">
            <div className="service-info">
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <p className="price">Price: ${service.price}</p>
            </div>
            <button
              className="delete-btn"
              onClick={() => removeService(service.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;

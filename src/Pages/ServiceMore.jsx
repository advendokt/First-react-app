// ServiceMore.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ServiceMore.css';

const ServiceMore = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Запрос на получение всех услуг
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/services');
        setServices(response.data);
      } catch (err) {
        setError('Error fetching services');
      }
    };

    fetchServices();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (services.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container container-margin">
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-12 col-sm-6 col-md-4">
            <div className="card">
              <img
                src={service.image ? `http://localhost:3000${service.image}` : 'https://via.placeholder.com/400x300'}
                alt={service.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text"><strong>Price:</strong> ${service.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMore;

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
        console.log('Fetched services:', response.data);  // Для отладки
        setServices(response.data);
      } catch (err) {
        setError('Error fetching services');
        console.error(err);
      }
    };

    fetchServices();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (services.length === 0) {
    return <div className="text-center">Loading...</div>;  // Пока данные загружаются
  }

  return (
    <div className="container">
      <div className="row">
        {services.map((service) => (
          <div key={service.id} className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={service.image || 'https://via.placeholder.com/400x300'}
                className="card-img-top"
                alt={service.name}
              />
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p className="card-text">{service.description}</p>
                <p className="card-text"><strong>Price:</strong> ${service.price}</p>
              </div>
              <div className="card-footer text-muted">
                <small>Service ID: {service.id}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMore;

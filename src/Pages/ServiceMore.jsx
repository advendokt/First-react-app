import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ServiceMore.css';

const ServiceMore = () => {
  const { id } = useParams();  // Извлекаем id из URL
  const [service, setService] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Запрос на получение информации о конкретной услуге
    const fetchService = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/services/${id}`);
        console.log('Fetched service:', response.data);  // Для отладки
        setService(response.data);
      } catch (err) {
        setError('Error fetching service');
        console.error(err);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!service) {
    return <div className="text-center">Loading...</div>;  // Пока данные загружаются
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-sm">
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
      </div>
    </div>
  );
};

export default ServiceMore;

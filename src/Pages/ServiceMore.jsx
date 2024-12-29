// ServiceMore.jsx
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

function ServiceMore() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the server
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container>
      <h1 className='mt-10'>Наши услуги</h1>
      <div className="row">
        {services && services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text>
                  <strong>Цена:</strong> {service.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ServiceMore;

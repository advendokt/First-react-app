import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const ServiceMore = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Default animation duration
      once: true, // Animation happens only once
    });
  }, []);

  // Array of data for the cards
  const [services, setServices] = useState([
    { id: 1, title: 'Service 1', description: 'Description of service 1', imgSrc: 'https://via.placeholder.com/300x200', aosDuration: 1000 },
    { id: 2, title: 'Service 2', description: 'Description of service 2', imgSrc: 'https://via.placeholder.com/300x200', aosDuration: 1200 },
    { id: 3, title: 'Service 3', description: 'Description of service 3', imgSrc: 'https://via.placeholder.com/300x200', aosDuration: 1400 },
  ]);

  // Function to add a new card
  const addCard = () => {
    setServices([
      ...services,
      { id: services.length + 1, title: `Service ${services.length + 1}`, description: `Description of service ${services.length + 1}`, imgSrc: 'https://via.placeholder.com/300x200', aosDuration: 1600 }
    ]);
  };

  // Function to remove a card
  const removeCard = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <Card data-aos="fade-up" data-aos-duration={service.aosDuration}>
              <Card.Img variant="top" src={service.imgSrc} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="primary" onClick={() => removeCard(service.id)}>Remove</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Button className="mt-4" onClick={addCard}>Add Card</Button>
    </div>
  );
};

export default ServiceMore;
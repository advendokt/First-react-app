import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSwitcher from './Language/LanguageSwitcher';
import ROUTES from './constants/Routes';

import Banner from './components/Banner';
import Features from './components/Features';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhyUs from './Pages/WhyUs.jsx';
import FeaturesMore from './Pages/FeaturesMore.jsx';
import AboutMore from './Pages/AboutMore.jsx';
import ServiceMore from './Pages/ServiceMore.jsx';

import Login from './admin/Login';
import AdminPanel from './admin/AdminPanel';

import Loading from './components/Loading';

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [servicesmore, setServicesmore] = useState([]);

  // Получение данных с сервера
  useEffect(() => {
    fetch('http://localhost:3000/api/services')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched services:', data); // Log the fetched data for debugging
        setServicesmore(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        console.error('Error details:', error.message, error.stack);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  const addService = (service, file) => {
    const formData = new FormData();
    formData.append('name', service.name);
    formData.append('description', service.description);
    formData.append('price', service.price);
    if (file) {
      formData.append('image', file); // Append the image file only if it exists
    }

    console.log('Form data:', service, file); // Log the form data for debugging

    fetch('http://localhost:3000/api/services', { // Ensure the port matches the server port
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((newService) => {
        console.log('Added service:', newService); // Log the added service for debugging
        setServicesmore([...servicesmore, newService.service]);
      })
      .catch((error) => {
        console.error('Error adding service:', error);
        alert(`Error adding service: ${error.message}`);
      });
  };

  const removeService = (id) => {
    if (!id) {
      console.error('Service ID is undefined');
      return;
    }

    fetch(`http://localhost:3000/api/services/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Deleted service ID:', id); // Log the deleted service ID for debugging
        setServicesmore(servicesmore.filter((service) => service.id !== id));
      })
      .catch((error) => console.error('Error deleting service:', error));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        {/* Other Routes */}
        <Route path={ROUTES.HOME} element={
          <>
            <Banner />
            <Features />
            <About />
            <Service />
            <Gallery />
            <Contact />
          </>
        } />

        <Route path={ROUTES.FEATURES_MORE} element={<FeaturesMore />} />
        <Route path={ROUTES.ABOUT_MORE} element={<AboutMore />} />
        <Route path={ROUTES.SERVICES_MORE} element={<ServiceMore servicesmore={servicesmore} />} />
        <Route path={ROUTES.WHY_US} element={<WhyUs />} />

        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Admin Panel Route */}
        <Route path="/admin"
          element={isAuthenticated ? <AdminPanel servicesmore={servicesmore} setServicesmore={setServicesmore} addService={addService} removeService={removeService} /> : <Navigate to="/login" />}
        />
      </Routes>

      <LanguageSwitcher />
      <Footer />
    </Router>
  );
}

export default App;

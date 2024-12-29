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

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [servicesmore, setServicesmore] = useState([]);
  const [error, setError] = useState('');

  // Загрузка сервисов с сервера
  useEffect(() => {
    fetch('http://localhost:5001/services')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then((data) => {
        setServicesmore(data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setError('Failed to load services');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Добавление нового сервиса
  const addService = (service) => {
    fetch('http://localhost:5001/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((newService) => {
        setServicesmore((prevServices) => [...prevServices, newService]);
      })
      .catch((error) => {
        console.error('Error adding service:', error);
        setError('Failed to add service');
      });
  };

  // Удаление сервиса
  const removeService = (id) => {
    fetch(`http://localhost:5001/services/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setServicesmore((prevServices) =>
          prevServices.filter((service) => service.id !== id)
        );
      })
      .catch((error) => {
        console.error('Error deleting service:', error);
        setError('Failed to delete service');
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      {error && <div className="error">{error}</div>}
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <>
              <Banner />
              <Features />
              <About />
              <Service />
              <Gallery />
              <Contact />
            </>
          }
        />
        <Route path="/services/:id" element={<ServiceMore />} />
        <Route path={ROUTES.FEATURES_MORE} element={<FeaturesMore />} />
        <Route path={ROUTES.ABOUT_MORE} element={<AboutMore />} />
        <Route
          path={ROUTES.SERVICES_MORE}
          element={<ServiceMore servicesmore={servicesmore} />}
        />

        <Route path={ROUTES.WHY_US} element={<WhyUs />} />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminPanel
                servicesmore={servicesmore}
                addService={addService}
                removeService={removeService}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <LanguageSwitcher />
      <Footer />
    </Router>
  );
};

export default App;

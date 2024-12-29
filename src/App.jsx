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

  // Fetch services from the backend
  const fetchServices = async () => {
    try {
      const response = await fetch('/services'); // Backend URL (Proxy in development)
      if (response.ok) {
        const data = await response.json();
        setServicesmore(data);
      } else {
        console.error('Error fetching services');
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      alert('Could not load services.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  const addService = async (service) => {
    try {
      const response = await fetch('/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(service),
      });

      if (response.ok) {
        const newService = await response.json();
        setServicesmore((prevServices) => [...prevServices, newService]);
      } else {
        console.error('Error adding service');
      }
    } catch (error) {
      console.error('Error adding service:', error);
    }
  };

  const removeService = async (id) => {
    try {
      const response = await fetch(`/services/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setServicesmore((prevServices) => prevServices.filter((service) => service.id !== id));
      } else {
        console.error('Error deleting service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
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
        <Route path={ROUTES.FEATURES_MORE} element={<FeaturesMore />} />
        <Route path={ROUTES.ABOUT_MORE} element={<AboutMore />} />
        <Route path={ROUTES.SERVICES_MORE} element={<ServiceMore servicesmore={servicesmore} />} />
        <Route path={ROUTES.WHY_US} element={<WhyUs />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminPanel servicesmore={servicesmore} addService={addService} removeService={removeService} />
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
}

export default App;

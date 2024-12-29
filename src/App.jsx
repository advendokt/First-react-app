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
      .then((response) => response.json())
      .then((data) => {
        setServicesmore(data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  const addService = (service) => {
    fetch('http://localhost:3000/api/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then((response) => response.json())
      .then((newService) => {
        setServicesmore([...servicesmore, newService]);
      })
      .catch((error) => console.error('Error adding service:', error));
  };

  const removeService = (id) => {
    fetch(`http://localhost:3000/api/services/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
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

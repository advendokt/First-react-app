import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';  // <-- Add this line

// Импортируем компоненты
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSwitcher from './Language/LanguageSwitcher';
import ROUTES from './constants/Routes'; // Убедись, что путь правильный

// Страницы
import FeaturesMore from './Pages/FeaturesMore.jsx';
import AboutMore from './Pages/AboutMore.jsx';
import ServiceMore from './Pages/ServiceMore.jsx';
import Banner from './components/Banner';
import Features from './components/Features';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhyUs from './Pages/WhyUs.jsx';

import Login from './admin/Login'; // Import login from the admin folder
import AdminPanel from './admin/AdminPanel'; // Import the AdminPanel as well



// Анимация загрузки
import Loading from './components/Loading';

// Импорт стилей
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Эмуляция загрузки
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  // Отображение экрана загрузки
  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        {/* Главная страница */}
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
        {/* Дополнительные страницы */}
        <Route path={ROUTES.FEATURES_MORE} element={<FeaturesMore />} />
        <Route path={ROUTES.ABOUT_MORE} element={<AboutMore />} />
        <Route path={ROUTES.SERVICES_MORE} element={<ServiceMore />} />
        <Route path={ROUTES.WHY_US} element={<WhyUs />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        {/* Protected Route (Admin Panel) */}
        <Route path="/admin" element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />} />

      </Routes>
      <LanguageSwitcher />
      <Footer />
    </Router>
  );
}

export default App;

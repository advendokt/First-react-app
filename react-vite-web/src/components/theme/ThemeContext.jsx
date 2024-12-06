// src/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Создаём контекст для темы
const ThemeContext = createContext();

// Компонент-провайдер для темы
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Начальная тема - light

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для использования контекста в других компонентах
export const useTheme = () => useContext(ThemeContext);

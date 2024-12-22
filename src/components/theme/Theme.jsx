// src/components/Theme.jsx
import React from 'react';
import { useTheme } from '../../ThemeContext'; // Импортируем хук из ThemeContext

const Theme = () => {
  const { theme, toggleTheme } = useTheme(); // Получаем текущую тему и функцию для переключения темы

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Переключить на тёмную тему' : 'Переключить на светлую тему'}
      </button>
    </div>
  );
};

export default Theme;

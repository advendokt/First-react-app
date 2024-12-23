// src/components/LanguageSwitcher.js
import React from 'react';
import i18next from 'i18next';
import './LanguageSwitcher.css'; // We will add styles for positioning

const LanguageSwitcher = () => {
  const switchLanguage = (language) => {
    i18next.changeLanguage(language);  // Switch the language
  };

  return (
    <div className="language-switcher">
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('ru')}>Русский</button>
      <button onClick={() => switchLanguage('et')}>Eesti</button>
    </div>
  );
};

export default LanguageSwitcher;

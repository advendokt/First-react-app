import React, { useState } from 'react';
import i18next from 'i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (language) => {
    i18next.changeLanguage(language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-switcher-container">
      <button className="language-switcher" onClick={toggleDropdown}>
        🌐
      </button>
      {isOpen && (
        <div className="language-dropdown">
          <button onClick={() => switchLanguage('en')}>English</button>
          <button onClick={() => switchLanguage('ru')}>Русский</button>
          <button onClick={() => switchLanguage('et')}>Eesti</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
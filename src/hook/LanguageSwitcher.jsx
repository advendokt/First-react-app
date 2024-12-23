// src/components/LanguageSwitcher.js
import React from 'react';
import i18n from '../Language/i18next';

function LanguageSwitcher() {
  const switchLanguage = (language) => {
    i18n.changeLanguage(language); // Переключаем язык на выбранный
  };

  return (
    <div>
      <button onClick={() => switchLanguage('et')}>Eesti</button>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('ru')}>Русский</button>
    </div>
  );
}

export default LanguageSwitcher;

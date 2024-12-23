// src/components/About.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation(); // Хук для переводов
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleNavigate = () => {
    navigate('/About-more');
  };

  return (
    <div id='about' className="px-4 py-5">
      <h2 className="pb-2 border-bottom container px-4 py-5" data-aos="fade-down">
        {t('aboutTitle')}  {/* Использование перевода */}
      </h2>

      <div className="row gap-4">
        <div className="col text-center p-3" data-aos="fade-down">
          <h1>{t('label1')}</h1>  {/* Использование перевода */}
          <p>{t('description1')}</p>  {/* Использование перевода */}
        </div>
        <div className="col text-center p-3" data-aos="fade-down">
          <h1>{t('label2')}</h1>  {/* Использование перевода */}
          <p>{t('description2')}</p>  {/* Использование перевода */}
        </div>
        <div className="col text-center p-3" data-aos="fade-down">
          <h1>{t('label3')}</h1>  {/* Использование перевода */}
          <p>{t('description3')}</p>  {/* Использование перевода */}
        </div>
        <div className="text-center" data-aos="fade-down">
          <h1>{t('aboutMore')}</h1>  {/* Использование перевода */}
          <p>{t('aboutDescription')}</p>  {/* Использование перевода */}
          <button className="btn btn-primary btn-lg" onClick={handleNavigate}>
            {t('readMore')}  {/* Использование перевода */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

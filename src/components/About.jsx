import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleNavigate = () => navigate('/About-more');

  const sections = [
    { label: 'label1', description: 'description1' },
    { label: 'label2', description: 'description2' },
    { label: 'label3', description: 'description3' }
  ];

  return (
    <div id='about' className="px-4 py-5">
      <h2 className="pb-2 border-bottom container px-4 py-5" data-aos="fade-down">
        {t('aboutTitle')}
      </h2>

      <div className="row gap-4">
        {sections.map((section, index) => (
          <div className="col text-center p-3" key={index} data-aos="fade-down">
            <h1>{t(section.label)}</h1>
            <p>{t(section.description)}</p>
          </div>
        ))}
        <div className="text-center" data-aos="fade-down">
          <h1>{t('aboutMore')}</h1>
          <p>{t('aboutDescription')}</p>
          <button className="btn btn-primary btn-lg" onClick={handleNavigate}>
            {t('readMore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

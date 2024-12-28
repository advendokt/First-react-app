import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyUs.css'; // Custom CSS file
import { useTranslation } from 'react-i18next';

const WhyUs = () => {

  const { t } = useTranslation(); // This is enough to access translations
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-end">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="form-select w-auto">
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="et">Eesti</option>
        </select>
      </div>
      <h1 className="text-center display-4 mb-4 mt-5 text-primary">{t('title')}</h1>
      <p className="text-center lead mb-5 text-muted">{t('description')}</p>

      {/* Cards Section */}
      <div className="row g-4">
        <div className="col-md-4" data-aos="zoom-in">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-people-fill display-3 text-primary mb-3"></i>
              <h5 className="card-title">{t('expertTeam')}</h5>
              <p className="card-text">{t('expertTeamDesc')}</p>
              <p className="text-muted small">{t('expertTeamDetail')}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-lightbulb-fill display-3 text-success mb-3"></i>
              <h5 className="card-title">{t('innovativeSolutions')}</h5>
              <p className="card-text">{t('innovativeSolutionsDesc')}</p>
              <p className="text-muted small">{t('innovativeSolutionsDetail')}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-hand-thumbs-up-fill display-3 text-warning mb-3"></i>
              <h5 className="card-title">{t('customerFocus')}</h5>
              <p className="card-text">{t('customerFocusDesc')}</p>
              <p className="text-muted small">{t('customerFocusDetail')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="row g-4 mt-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Quality Service"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
          <div>
            <h2 className="text-primary">{t('unmatchedQuality')}</h2>
            <p className="text-muted">{t('unmatchedQualityDesc')}</p>
            <ul className="list-unstyled">
              <li>✔ {t('commitmentExcellence')}</li>
              <li>✔ {t('sustainablePractices')}</li>
              <li>✔ {t('transparentCommunication')}</li>
            </ul>
            <button className="btn btn-primary btn-lg">{t('learnMore')}</button>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="row g-4 mt-5">
        <div className="col-md-12" data-aos="fade-up">
          <h2 className="text-center text-success">{t('valueProposition')}</h2>
          <p className="text-center text-muted">{t('valuePropositionDesc')}</p>
          <div className="row mt-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <h5 className="text-primary">{t('commitmentExcellence')}</h5>
              <p>{t('commitmentExcellenceDesc')}</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <h5 className="text-success">{t('sustainablePractices')}</h5>
              <p>{t('sustainablePracticesDesc')}</p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <h5 className="text-warning">{t('transparentCommunication')}</h5>
              <p>{t('transparentCommunicationDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

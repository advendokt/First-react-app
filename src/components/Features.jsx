import React, { useEffect } from 'react';
import './Features.css';
import { FaCogs, FaTachometerAlt, FaTable } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const featureData = [
    { icon: <FaTable />, title: 'featuredTitle1', description: 'featuredDescription1', aos: 'flip-left' },
    { icon: <FaCogs />, title: 'featuredTitle2', description: 'featuredDescription2', aos: 'zoom-in' },
    { icon: <FaTachometerAlt />, title: 'featuredTitle3', description: 'featuredDescription3', aos: 'fade-left' },
  ];

  const handleNavigate = () => navigate('/features-more');

  return (
    <div id="features" className="px-4 py-5" data-aos="fade-up">
      <h2 className="pb-2 border-bottom">{t('featuresTitle')}</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2" data-aos="fade-right">
          <h2 className="fw-bold text-body-emphasis">{t('titleDescription')}</h2>
          <p className="text-body-secondary">{t('paragraphDescription')}</p>
          <button className="btn btn-primary btn-lg" onClick={handleNavigate}>{t('goToFeaturesMore')}</button>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            {featureData.map(({ icon, title, description, aos }, index) => (
              <div className="col d-flex flex-column gap-2" key={index} data-aos={aos}>
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  {icon}
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">{t(title)}</h4>
                <p className="text-body-secondary">{t(description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

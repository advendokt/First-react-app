import React, { useEffect } from 'react';
import './Features.css';
import { FaCogs, FaTachometerAlt, FaTable } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Features() {
  const { t } = useTranslation(); // Initialize translation function
  const navigate = useNavigate(); // Initialize navigate function

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200, // Offset from the trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Animation happens only once
    });
  }, []);

  // Button click handler to navigate to /features-more
  const handleNavigate = () => {
    navigate('/features-more'); // Navigate to the FeaturesMore page
  };

  return (
    <div id="features" className="px-4 py-5" data-aos="fade-up">
      <h2 className="pb-2 border-bottom">{t('featuresTitle')}</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2" data-aos="fade-right">
          <h2 className="fw-bold text-body-emphasis">{t('titleDescription')}</h2>
          <p className="text-body-secondary">
            {t('paragraphDescription')}
          </p>
          {/* Button that triggers navigation */}
          <button className="btn btn-primary btn-lg" onClick={handleNavigate}>
            {t('goToFeaturesMore')}
          </button>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2" data-aos="flip-left">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <FaTable />
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">{t('featuredTitle1')}</h4>
              <p className="text-body-secondary">
                {t('featuredDescription1')}
              </p>
            </div>

            <div className="col d-flex flex-column gap-2" data-aos="zoom-in">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <FaCogs />
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">{t('featuredTitle2')}</h4>
              <p className="text-body-secondary">
                {t('featuredDescription2')}
              </p>
            </div>

            <div className="col d-flex flex-column gap-2" data-aos="fade-left">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <FaTachometerAlt />
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">{t('featuredTitle3')}</h4>
              <p className="text-body-secondary">
                {t('featuredDescription3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
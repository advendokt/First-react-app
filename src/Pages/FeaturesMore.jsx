import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FeaturesMore.css'; // Import the CSS file for styles

const FeaturesMore = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      offset: 200, // Offset from the trigger point
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Animation happens only once
    });
  }, []);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div id='featuresMore' className='container px-4 py-5'>
      <h2 className='pb-2 border-bottom container px-4 py-5' data-aos="fade-down">{t('featuresMoreTitle')}</h2>
      <div className='row'>
        <div className='col-lg-6 mb-5'>
          <div className='col p-3' data-aos="fade-right">
            <h3>{t('featureMoreLable1')}</h3>
            <p>{t('featureMoreText1')}</p>
            {/* Maybe place for IMG in design */}
          </div>
          <div className='col p-3' data-aos="fade-left">
            <h3>{t('featureMoreLable2')}</h3>
            <p>{t('featureMoreText2')}</p>
            {/* Maybe place for IMG in design */}
          </div>
          <div className='col p-3' data-aos="fade-right">
            <h3>{t('featureMoreLable3')}</h3>
            <p>{t('featureMoreText3')}</p>
            {/* Maybe place for IMG in design */}
          </div>
          <div className='col p-3' data-aos="fade-left">
            <h3>{t('featureMoreLable4')}</h3>
            <p>{t('featureMoreText4')}</p>
            {/* Maybe place for IMG in design */}
          </div>
        </div>
      </div>
      <div className='counter-container'>
        <h3>{t('counterTitle')}</h3>
        <p>{t('counterValue')}: {counter}</p>
        <button className='btn btn-primary' onClick={incrementCounter}>{t('incrementCounter')}</button>
      </div>
    </div>
  );
};

export default FeaturesMore;
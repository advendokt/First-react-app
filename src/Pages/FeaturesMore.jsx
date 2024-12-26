import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FeaturesMore.css';

const FeaturesMore = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const incrementCounter = useCallback(() => setCounter(prev => prev + 1), []);

  const featureData = [
    { label: t('featureMoreLable1'), text: t('featureMoreText1'), animation: 'fade-right' },
    { label: t('featureMoreLable2'), text: t('featureMoreText2'), animation: 'fade-left' },
    { label: t('featureMoreLable3'), text: t('featureMoreText3'), animation: 'fade-right' },
    { label: t('featureMoreLable4'), text: t('featureMoreText4'), animation: 'fade-left' },
  ];

  return (
    <div id='featuresMore' className='container px-4 py-5'>
      <h2 className='pb-2 border-bottom' data-aos="fade-down">{t('featuresMoreTitle')}</h2>
      <div className='row'>
        {featureData.map((feature, index) => (
          <div key={index} className='col p-3' data-aos={feature.animation}>
            <h3>{feature.label}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
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

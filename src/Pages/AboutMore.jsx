import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutMore.css'; // Import the CSS file for styles

function AboutMore() {
  const { t } = useTranslation();

  return (
    <div className="about-more-container">
      <section className="company-info">
        <h1>{t('aboutMoreTitle')}</h1>
        <p>{t('aboutMoreDescription')}</p>
        <img src="path/to/company-image.jpg" alt="Company" className="company-image" />
      </section>

      <section className="team-info">
        <h2>{t('teamTitle')}</h2>
        <div className="team-member">
          <img src="path/to/team-member1.jpg" alt="Team Member 1" className="team-image" />
          <div className="team-details">
            <h3>{t('teamMember1Name')}</h3>
            <p>{t('teamMember1Role')}</p>
            <p>{t('teamMember1Description')}</p>
          </div>
        </div>
        <div className="team-member">
          <img src="path/to/team-member2.jpg" alt="Team Member 2" className="team-image" />
          <div className="team-details">
            <h3>{t('teamMember2Name')}</h3>
            <p>{t('teamMember2Role')}</p>
            <p>{t('teamMember2Description')}</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="additional-info">
        <h2>{t('additionalInfoTitle')}</h2>
        <p>{t('additionalInfoDescription')}</p>
      </section>
    </div>
  );
}

export default AboutMore;
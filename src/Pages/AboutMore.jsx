import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutMore.css';

function AboutMore() {
  const { t } = useTranslation();

  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      name: t('teamMember1Name'),
      role: t('teamMember1Role'),
      description: t('teamMember1Description'),
      image: 'path/to/team-member1.jpg',
      animation: 'fade-right',
    },
    {
      name: t('teamMember2Name'),
      role: t('teamMember2Role'),
      description: t('teamMember2Description'),
      image: 'path/to/team-member2.jpg',
      animation: 'fade-left',
    },
    // Можно добавить больше участников по мере необходимости
  ];

  return (
    <div className="about-more-container">
      <section className="company-info mt-5" data-aos="fade-up">
        <h1>{t('aboutMoreTitle')}</h1>
        <p>{t('aboutMoreDescription')}</p>
        <img src="path/to/company-image.jpg" alt="Company" className="company-image" />
      </section>

      <section className="team-info">
        <h2 data-aos="fade-up">{t('teamTitle')}</h2>
        {teamMembers.map((member, index) => (
          <div
            className="team-member"
            data-aos={member.animation}
            key={index}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-details">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="additional-info" data-aos="fade-up">
        <h2>{t('additionalInfoTitle')}</h2>
        <p>{t('additionalInfoDescription')}</p>
      </section>

      <section className="mission-info" data-aos="fade-up">
        <h2>{t('missionTitle')}</h2>
        <p>{t('missionDescription')}</p>
      </section>

      <section className="values-info" data-aos="fade-up">
        <h2>{t('valuesTitle')}</h2>
        <p>{t('valuesDescription')}</p>
      </section>

      <section className="history-info" data-aos="fade-up">
        <h2>{t('historyTitle')}</h2>
        <p>{t('historyDescription')}</p>
      </section>
    </div>
  );
}

export default AboutMore;

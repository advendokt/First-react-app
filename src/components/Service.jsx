import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCloud, faLaptop, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Service() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (path) => navigate(path);

    useEffect(() => {
        AOS.init({ duration: 1200, offset: 200, easing: 'ease-in-out', once: true });
    }, []);

    const serviceCards = [
        { icon: faShieldAlt, title: t('passwordHelp'), description: t('passwordHelpDescription') },
        { icon: faCloud, title: t('cloudConferencingSupport'), description: t('cloudConferencingSupportDescription') },
        { icon: faLaptop, title: t('orderNewHardware'), description: t('orderNewHardwareDescription') },
        { icon: faCalendarAlt, title: t('meetingHelp'), description: t('meetingHelpDescription') }
    ];

    const announcements = [
        { time: '3 days ago', title: t('announcement1'), description: t('announcement1Description') },
        { time: '3 days ago', title: t('announcement2'), description: t('announcement2Description') },
        { time: '3 days ago', title: t('announcement3Title'), description: t('announcement3Description') },
        { time: '3 days ago', title: t('announcement4Title'), description: t('announcement4Description') }
    ];

    return (
        <div id="service" className="container py-5">
            <div className="row">
                {/* Popular Topics */}
                <div className="col-lg-6 mb-5" data-aos="fade-up">
                    <h2 className="mb-4">{t('popularTopics')}</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {serviceCards.map((card, index) => (
                            <div key={index} className="col">
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <FontAwesomeIcon icon={card.icon} size="4x" className="mb-3 text-primary" />
                                        <h4 className="card-title">{card.title}</h4>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={() => handleNavigation('/service-more')}>{t('exploreMoreTopics')}</button>
                    </div>
                </div>

                {/* Announcements */}
                <div className="col-lg-6" data-aos="fade-up">
                    <h2 className="mb-4">{t('announcements')}</h2>
                    <div className="list-group">
                        {announcements.map((announcement, index) => (
                            <a key={index} href="#" className="list-group-item list-group-item-action">
                                <small className="text-muted d-block">{announcement.time}</small>
                                <h5>{announcement.title}</h5>
                                <p>{announcement.description}</p>
                            </a>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={() => handleNavigation('/announcements')}>{t('seeAllAnnouncements')}</button>
                    </div>
                </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="text-center mt-5" data-aos="fade-up">
                <h2 className="mb-4">{t('whatSetsUsApart')}</h2>
                <p className="lead">{t('whatSetsUsApartDescription')}</p>
                <button className="btn btn-primary mt-3" onClick={() => handleNavigation('/why-us')}>{t('getInTouch')}</button>
            </div>
        </div>
    );
}

export default Service;

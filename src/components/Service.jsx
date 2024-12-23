import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCloud, faLaptop, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Service() {
    const { t } = useTranslation(); // Initialize translation function
    const navigate = useNavigate();

    const handleAnnouncementsClick = () => {
        navigate('/announcements');
    };

    const handleServiceMoreClick = () => {
        navigate('/service-more');
    };

    const handleWhyUsClick = () => {
        navigate('/why-us');
    };

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            offset: 200, // Offset from the trigger point
            easing: 'ease-in-out', // Easing function for animations
            once: true, // Animation happens only once
        });
    }, []);

    return (
        <div id="service" className="container py-5">
            <div className="row">
                {/* Popular Topics Section */}
                <div className="col-lg-6 mb-5" data-aos="fade-up">
                    <h2 className="mb-4">{t('popularTopics')}</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faShieldAlt} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">{t('passwordHelp')}</h4>
                                    <p>{t('passwordHelpDescription')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faCloud} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">{t('cloudConferencingSupport')}</h4>
                                    <p>{t('cloudConferencingSupportDescription')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faLaptop} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">{t('orderNewHardware')}</h4>
                                    <p>{t('orderNewHardwareDescription')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faCalendarAlt} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">{t('meetingHelp')}</h4>
                                    <p>{t('meetingHelpDescription')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={handleServiceMoreClick}>{t('exploreMoreTopics')}</button>
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="col-lg-6" data-aos="fade-up">
                    <h2 className="mb-4">{t('announcements')}</h2>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">
                            <small className="text-muted d-block">3 days ago</small>
                            <p>{t('announcement1')}</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <small className="text-muted d-block">3 days ago</small>
                            <p>{t('announcement2')}</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <h5>{t('announcement3Title')}</h5>
                            <small className="text-muted">3 days ago</small>
                            <p>{t('announcement3Description')}</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <h5>{t('announcement4Title')}</h5>
                            <small className="text-muted">3 days ago</small>
                            <p>{t('announcement4Description')}</p>
                        </a>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={handleAnnouncementsClick}>{t('seeAllAnnouncements')}</button>
                    </div>
                </div>
            </div>

            {/* What Sets Us Apart Section */}
            <div className="text-center mt-5" data-aos="fade-up">
                <h2 className="mb-4">{t('whatSetsUsApart')}</h2>
                <p className="lead">
                    {t('whatSetsUsApartDescription')}
                </p>
                <button className="btn btn-primary mt-3" onClick={handleWhyUsClick}>{t('getInTouch')}</button>
            </div>
        </div>
    );
}

export default Service;
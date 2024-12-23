import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Contact() {
    const { t } = useTranslation(); // Initialize translation function

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
        <div id="contact" className="container py-5">
            <div className="text-center mb-5" data-aos="fade-down">
                <h2>{t('contactUs')}</h2>
                <p className="text-muted">{t('contactDescription')}</p>
            </div>

            <div className="row">
                {/* Contact Form */}
                <div className="col-lg-6 mb-4" data-aos="fade-right">
                    <h4 className="mb-3">{t('getInTouch')}</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">{t('name')}</label>
                            <input type="text" className="form-control" id="name" placeholder={t('yourName')} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">{t('email')}</label>
                            <input type="email" className="form-control" id="email" placeholder={t('yourEmail')} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">{t('message')}</label>
                            <textarea className="form-control" id="message" rows="4" placeholder={t('yourMessage')} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">{t('submit')}</button>
                    </form>
                </div>

                {/* Map */}
                <div className="col-lg-6" data-aos="fade-left">
                    <h4 className="mb-3">{t('ourLocation')}</h4>
                    <div className="ratio ratio-16x9">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1673.7761030140289!2d26.712929011995275!3d58.349833874047036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eb37487c7817f9%3A0x31f91313d1bbe0ee!2sTartu%20Rakenduslik%20Kolled%C5%BE!5e1!3m2!1set!2see!4v1733694354659!5m2!1set!2see" 
                            width="600" 
                            height="450" 
                            style={{border: 0}} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
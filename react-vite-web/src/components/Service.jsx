import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Font Awesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faCloud, faLaptop, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Service() {
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
                    <h2 className="mb-4">Popular Topics</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faShieldAlt} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">Password Help</h4>
                                    <p>Reset, change, or unlock your account credentials for uninterrupted access.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faCloud} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">Cloud Conferencing Support</h4>
                                    <p>Get assistance with setting up or scheduling Webex or other virtual meetings.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faLaptop} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">Order New Hardware</h4>
                                    <p>Upgrade your tools by ordering laptops, phones, and more with ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 text-center">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faCalendarAlt} size="4x" className="mb-3 text-primary" />
                                    <h4 className="card-title">Meeting Help</h4>
                                    <p>Master the art of scheduling meetings or reserving conference rooms for your team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary">Explore More Topics</button>
                    </div>
                </div>

                {/* Announcements Section */}
                <div className="col-lg-6" data-aos="fade-up">
                    <h2 className="mb-4">Announcements</h2>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">
                            <small className="text-muted d-block">3 days ago</small>
                            <p>
                                With great power (of mobile devices), there must also come great responsibility.
                                Three things you can do now to protect yourself and Comcast.
                            </p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <small className="text-muted d-block">3 days ago</small>
                            <p>
                                On Tuesday morning February 13, we will complete a network change that will redirect
                                all web traffic...
                            </p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <h5>Multi-Factor Authentication (MFA) for Outlook Web Access (OWA)</h5>
                            <small className="text-muted">3 days ago</small>
                            <p>Multi-Factor Authentication (MFA) for Outlook Web Access (OWA), also known as “webmail,”...</p>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            <h5>New Security Measures</h5>
                            <small className="text-muted">3 days ago</small>
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                                blandit.
                            </p>
                        </a>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary">See All Announcements & Alerts</button>
                    </div>
                </div>
            </div>

            {/* What Sets Us Apart Section */}
            <div className="text-center mt-5" data-aos="fade-up">
                <h2 className="mb-4">What Sets Us Apart</h2>
                <p className="lead">
                    At <strong>Your Company Name</strong>, we pride ourselves on providing <strong>responsive,
                    reliable, and secure</strong> support services tailored to empower our clients. Our expertise
                    ensures that your technology works for you—not against you.
                </p>
                <button className="btn btn-primary mt-3">Get in Touch</button>
            </div>
        </div>
    );
}

export default Service;

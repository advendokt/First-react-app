import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyUs.css'; // Custom CSS file

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center display-4 mb-4 mt-5 text-primary">Why Choose Us</h1>
      <p className="text-center lead mb-5 text-muted">
        At [Company Name], we pride ourselves on delivering exceptional service, innovative solutions, and an unwavering focus on customer satisfaction. Discover why we are the preferred choice for countless clients worldwide.
      </p>

      {/* Cards Section */}
      <div className="row g-4">
        <div className="col-md-4" data-aos="zoom-in">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-people-fill display-3 text-primary mb-3"></i>
              <h5 className="card-title">Expert Team</h5>
              <p className="card-text">
                Our team consists of experienced professionals dedicated to delivering top-notch services in every project we undertake.
              </p>
              <p className="text-muted small">
                With decades of collective experience, we ensure that your needs are met with precision and efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-lightbulb-fill display-3 text-success mb-3"></i>
              <h5 className="card-title">Innovative Solutions</h5>
              <p className="card-text">
                We leverage cutting-edge technology and creativity to provide solutions that set new industry standards.
              </p>
              <p className="text-muted small">
                From AI-driven analytics to custom-tailored software, we help businesses achieve their goals faster and smarter.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <i className="bi bi-hand-thumbs-up-fill display-3 text-warning mb-3"></i>
              <h5 className="card-title">Customer Focus</h5>
              <p className="card-text">
                Your satisfaction is at the heart of everything we do. We are committed to exceeding your expectations.
              </p>
              <p className="text-muted small">
                With a dedicated support team available 24/7, we ensure your experience is seamless and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="row g-4 mt-5">
        <div className="col-md-6" data-aos="fade-right">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Quality Service"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
          <div>
            <h2 className="text-primary">Unmatched Quality</h2>
            <p className="text-muted">
              We uphold the highest standards in every project, ensuring that our solutions are not only effective but also sustainable.
            </p>
            <ul className="list-unstyled">
              <li>✔ Rigorous quality control processes</li>
              <li>✔ Continuous improvement practices</li>
              <li>✔ Client feedback integrated into our workflow</li>
            </ul>
            <button className="btn btn-primary btn-lg">Learn More</button>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="row g-4 mt-5">
        <div className="col-md-12" data-aos="fade-up">
          <h2 className="text-center text-success">Our Value Proposition</h2>
          <p className="text-center text-muted">
            We combine expertise, technology, and dedication to offer unparalleled value to our clients.
          </p>
          <div className="row mt-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <h5 className="text-primary">Commitment to Excellence</h5>
              <p>
                Our commitment to excellence drives every decision we make and every solution we deliver.
              </p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <h5 className="text-success">Sustainable Practices</h5>
              <p>
                We embrace sustainable practices, ensuring that our solutions are environmentally friendly and socially responsible.
              </p>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <h5 className="text-warning">Transparent Communication</h5>
              <p>
                We believe in open, honest, and transparent communication, keeping you informed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

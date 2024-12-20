import React, { useEffect } from 'react';
import './Features.css';
import { FaCogs, FaTachometerAlt, FaTable } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function Features() {
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
    <div id="features" className=" px-4 py-5" data-aos="fade-up ">
      <h2 className="pb-2 border-bottom">Features with title</h2>

      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div className="col d-flex flex-column align-items-start gap-2" data-aos="fade-right">
          <h2 className="fw-bold text-body-emphasis">
            Left-aligned title explaining these awesome features
          </h2>
          <p className="text-body-secondary">
            Paragraph of text beneath the heading to explain the heading.
            We'll add onto it with another sentence and probably just keep
            going until we run out of words.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Primary button
          </a>
        </div>

        <div className="col">
          <div className="row row-cols-1 row-cols-sm-2 g-4">
            <div className="col d-flex flex-column gap-2" data-aos="flip-left">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <FaTable />
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
              <p className="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2" data-aos="zoom-in">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <FaCogs />
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
              <p className="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div className="col d-flex flex-column gap-2" data-aos="fade-left">
              <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                <FaTachometerAlt />
              </div>
              <h4 className="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
              <p className="text-body-secondary">
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

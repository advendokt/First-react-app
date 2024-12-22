import React from 'react';
import cyberpank from '../assets/images/ai-generated-8612487_1280.jpg';
import aigenerated86124871280 from '../assets/images/ai-generated-8612487_1280.jpg';
import aipunk from '../assets/images/ai-generated-8612487_1280.jpg';

import '../components/Banner.css';




function Banner() {
    return (
        <>
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="dark-overlay"></div>
                            <img src={cyberpank} className="d-block w-100 carousel-img" alt="Beautiful Sakura Blossom 1" />
                            <div className="carousel-caption"></div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide lable</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="dark-overlay"></div>
                            <img src={aigenerated86124871280 } className="d-block w-100 carousel-img" alt="Beautiful Sakura Blossom 2" />
                            <div className="carousel-caption"></div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="dark-overlay"></div>
                                <img src={aipunk} className="d-block w-100 carousel-img" alt="Beautiful Sakura Blossom 3" />
                            <div className="carousel-caption"></div>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Banner;

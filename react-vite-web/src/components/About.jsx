import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

function About() {

      // Initialize AOS
    useEffect(() => {
        AOS.init({
        duration: 1200, // Animation duration in milliseconds
        offset: 200, // Offset from the trigger point
        easing: 'ease-in-out', // Easing function for animations
        once: true, // Animation happens only once
        });
    }, []);

    return(
        <div id='about'>

            <h2 className="pb-2 border-bottom container px-4 py-5" data-aos="fade-down">About us</h2>
        
            <div className="row gap-4">
                <div className="col  text-center p-3" data-aos="fade-down">
                    <h1>Lable 1</h1>
                    <p>We are a team of passionate developers dedicated to creating amazing web 
                    applications. Our mission is to deliver high-quality software solutions 
                    that meet the needs of our clients and exceed their expectations.</p>
                </div>
                <div className="col text-center p-3" data-aos="fade-down">
                    <h1>Lable 2</h1>
                    <p>We are a team of passionate developers dedicated to creating amazing web 
                    applications. Our mission is to deliver high-quality software solutions 
                    that meet the needs of our clients and exceed their expectations.</p>
                </div>
                <div className="col text-center p-3 b-black" data-aos="fade-down" >
                    <h1>Lable 3</h1>
                    <p>We are a team of passionate developers dedicated to creating amazing web 
                    applications. Our mission is to deliver high-quality software solutions 
                    that meet the needs of our clients and exceed their expectations.</p>
                </div>
            </div>
        </div>

    )

}

export default About




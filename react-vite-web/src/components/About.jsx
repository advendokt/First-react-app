import React from 'react';
import './About.css';

function About() {

    return(
        <div className="container mt-5">

            <h2 className="pb-2 border-bottom container px-4 py-5" >About us</h2>
        
            <div className="row gap-4">
                <div className="col  text-center p-3">
                    <h1>Lable 1</h1>
                    <p>We are a team of passionate developers dedicated to creating amazing web 
                    applications. Our mission is to deliver high-quality software solutions 
                    that meet the needs of our clients and exceed their expectations.</p>
                </div>
                <div className="col text-center p-3">
                    <h1>Lable 2</h1>
                    <p>We are a team of passionate developers dedicated to creating amazing web 
                    applications. Our mission is to deliver high-quality software solutions 
                    that meet the needs of our clients and exceed their expectations.</p>
                </div>
                <div className="col text-center p-3 b-black">
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




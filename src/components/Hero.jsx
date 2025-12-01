import React from "react";
import "./Hero.css";


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
            <img src="/pic2.jpeg" alt="Ian Murigu" className="hero-img" />
                <div>
                    <h1>Hello I'm <span className="highlight">Ian Mwangi Murigu</span></h1>
                    <p>A passionate <strong>Full-Stack Engineer</strong> & <strong>Cybersecurity Enthusiast</strong></p>
                    <a href="#projects" className="hero-btn">View My Work</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

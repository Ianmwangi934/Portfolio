import React from "react";
import "./About.css";

const Hero =() =>{
    return (
        <section className="hero">
            
            <h1>Hello I'm <span className="highlight">Ian Mwangi Murigu</span></h1>
            <p>A passionate <strong>Full-Stack Web developer</strong> & <strong>Cybersecurity Enthusiast</strong></p>
            <a href="#projects" className="hero-btn">View My Work</a>
        </section>
    );
};
export default Hero;
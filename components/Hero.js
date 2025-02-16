// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <img src="https://media.licdn.com/dms/image/D5603AQH-yGVZzNdXfQ/profile-displayphoto-shrink_800_800/0/1706812806047?e=1724284800&v=beta&t=DtjInp8CEshKOLyoVlGHbxXf2CQPWDlfTEA8iSNTc6c" alt="Chris Yeu" className="hero-image" />
      <div className="hero-content">
        <h1>Chris Yeu</h1>
        <p>Welcome to my portfolio. I am a Front End Developer.</p>
      </div>
    </section>
  );
};

export default Hero;

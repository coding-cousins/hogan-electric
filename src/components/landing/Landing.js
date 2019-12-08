import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="Landing">
      <div className="video-container">
        <video playsinline muted loop autoPlay src='https://res.cloudinary.com/dmtn5fbdu/video/upload/v1575773293/Hogan%20Electric/compressed.mp4'/>
      </div>
      <div className="slogan-cta">
        <h1 className="slogan">Electricians <span>you</span> can trust</h1>
        <button className="cta" onClick={() => alert('request a quote clicked')}>Request a quote</button>
      </div>
    </section>
  );
};

export default Landing;

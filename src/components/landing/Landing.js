import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="Landing">
      <h1 className="slogan">Electricians you can trust</h1>
      <div className="video-container">
        <video playsinline muted loop autoPlay src='https://res.cloudinary.com/dmtn5fbdu/video/upload/v1575773293/Hogan%20Electric/compressed.mp4'/>
      </div>
      <button className="cta" onClick={() => alert('request a quote clicked')}>Request a quote</button>
    </section>
  );
};

export default Landing;

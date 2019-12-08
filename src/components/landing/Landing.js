import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="Landing">
      <h1 className="slogan">Synergize Your Electrolytes</h1>
      <div className="video-container">
        <video playsinline muted loop autoPlay src='https://res.cloudinary.com/dmtn5fbdu/video/upload/v1575773293/Hogan%20Electric/compressed.mp4'/>
      </div>
      
    </section>
  );
};

export default Landing;

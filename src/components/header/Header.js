import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="logo">
        <img src='https://res.cloudinary.com/dmtn5fbdu/image/upload/v1575776288/Hogan%20Electric/hogan-electric-logo_1.png' alt="Hogan electric logo"/>
      </div>
      <h2>About</h2>
      <h2>Contact</h2>
      <h2>Work</h2>
    </header>
  );
};

export default Header;

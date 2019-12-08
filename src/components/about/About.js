import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="About">
      <aside>
        <div className="electrical-guy">
          <img alt="Person working in electrical box" src="https://res.cloudinary.com/dmtn5fbdu/image/upload/v1575778964/Hogan%20Electric/electrical-guy.png"/>
        </div>
      </aside>
      <section>
        <p>
          Locally owned and operated, Rose City Electric Co. has a long tradition of delivering excellence and customer satisfaction. Since 1946, Rose City Electric Co. has proudly provided a wide-range of electrical services to Residential, Commercial, and Industrial customers throughout Portland and surrounding areas.
          We take great pride in our work and our team offers the highest level of quality. Our Portland electricians are licensed, bonded, and highly skilled in their field to ensure the utmost safety of your electrical system within your home or business. Our company is fully equipped to handle all of your electrical needs from new construction, remodels, tenant improvements, small additions, repair work, and much more. No job is too small!
        </p>
      </section>
    </section>
  );
};

export default About;

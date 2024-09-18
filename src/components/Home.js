import React from 'react';
import TypingEffect from 'react-typing-effect';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="container text-center" data-aos="fade-up">
        <img
          src="/profile.jpg"
          alt="Krushna Chandra Nayak"
          className="profile-pic"
          data-aos="fade-in"
        />
        <h1 className="display-4" data-aos="fade-up">Welcome to My Portfolio</h1>

        {/* Typing effect in its own div */}
        <div className="typing-wrapper">
          <TypingEffect
            text={[
              "Hello! I'm Mr. Krushna Chandra Nayak.",
              "A passionate Front-End web developer with expertise in JavaScript, React, and various other technologies.",
              "I thrive on creating dynamic and responsive web applications that provide excellent user experiences.",
              "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book.",
              "Feel free to connect with me through the contact section or follow me on social media!"

            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            className="lead typing-effect"
          />
        </div>

        {/* Download CV button separated */}
        <a
          href="/resume.pdf"
          download
          className="btn btn-primary mt-4 download-cv-btn"
          data-aos="fade-up"
        >
          <i className="bi bi-file-earmark-text"></i> Download CV
        </a>
      </div>
    </section>
  );
};

export default Home;

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Skills.css'; // Assuming the CSS file is here

const Skills = () => {

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      const progressBars = document.querySelectorAll('.progress-bar');

      const sectionPosition = skillsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (sectionPosition < screenPosition) {
        progressBars.forEach((bar) => {
          const percentage = bar.getAttribute('aria-valuenow');
          bar.style.width = `${percentage}%`; // Smoothly fill the progress bar
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#f4f4f4' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#007bff' }}><i className="bi bi-gear"></i> My Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <h4><i className="fab fa-html5" style={{ color: '#E34F26' }}></i> HTML</h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>90%</div>
            </div>
          </div>
          <div className="col-md-4">
            <h4><i className="fab fa-css3-alt" style={{ color: '#1572B6' }}></i> CSS</h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>80%</div>
            </div>
          </div>
          <div className="col-md-4">
            <h4><i className="fab fa-js" style={{ color: '#F7DF1E' }}></i> JavaScript</h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>85%</div>
            </div>
          </div>
          <div className="col-md-4">
            <h4><i className="fab fa-react" style={{ color: '#61DAFB' }}></i> React</h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>75%</div>
            </div>
          </div>
          <div className="col-md-4">
            <h4><i className="fas fa-database" style={{ color: '#4DB33D' }}></i> MongoDB</h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>70%</div>
            </div>
          </div>
          <div className="col-md-4">
            <h4><i className="fab fa-java" style={{ color: '#007396' }}></i> Java</h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>60%</div>
            </div>
          </div>
          <div className="col-md-4">
            <h4><i className="fas fa-robot" style={{ color: '#FF5733' }}></i> Generative AI</h4>
            <div className="progress mb-4">
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}>90%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

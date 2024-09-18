import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', color: 'white' }}>
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <p>Hello! I’m a passionate web developer with a focus on creating user-friendly and responsive websites. My skills include HTML, CSS, JavaScript, React, and more. I love building applications that solve real-world problems and continuously learning new technologies.</p>
          </div>
          <div className="col-md-6">
            <p>When I’m not coding, I enjoy exploring new frameworks and libraries, working on personal projects, and contributing to open source. My goal is to keep growing as a developer and contribute meaningfully to web development projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

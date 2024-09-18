import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-5" style={{ backgroundColor: '#333', color: 'white' }}>
      <div className="container">
        <h2 className="text-center mb-4"><i className="bi bi-folder"></i> My Projects</h2>
        <div className="row">
          {/* Project Card */}
          {[
            {
              imgSrc: './project1.webp',
              title: 'PingPong Game',
              description: 'The game involves two paddles and a moving ball. The players have to move paddles in an upwards or downward direction and save the ball from getting hit by the wall.',
              githubLink: 'https://github.com/krushnachandranayak/Pingpong-game-useing-javascript.git',
              previewLink: 'https://krushnachandranayak.github.io/Pingpong-game-useing-javascript/'
            },
            {
              imgSrc: './project2.webp',
              title: 'Basic Calculator',
              description: 'Basic calculators can do only addition, subtraction, multiplication, and division mathematical calculations.',
              githubLink: 'https://github.com/krushnachandranayak/Basic-Calculator.git',
              previewLink: 'https://krushnachandranayak.github.io/Basic-Calculator/'
            },
            {
              imgSrc: './project3.jpeg',
              title: 'Age Calculator',
              description: 'The Age Calculator can determine the age or interval between two dates.',
              githubLink: 'https://github.com/krushnachandranayak/Age-calculator.git',
              previewLink: 'https://krushnachandranayak.github.io/Age-calculator/'
            },
            {
              imgSrc: './project4.jpg',
              title: 'Super Hero Hunt',
              description: 'A scavenger hunt in which children retrieve the potent weapons of the best-known Marvel superheroes!',
              githubLink: 'https://github.com/krushnachandranayak/super_heros_hunt.git',
              previewLink: 'https://krushnachandranayak.github.io/super_heros_hunt/'
            },
            {
              imgSrc: './project5.jpeg',
              title: 'Alarm Clock',
              description: 'An alarm clock that makes a sound or signal at a specified time to wake people up or remind them of something.',
              githubLink: 'https://github.com/krushnachandranayak/Alarm-clock.git',
              previewLink: 'https://krushnachandranayak.github.io/Alarm-clock/'
            },
            {
              imgSrc: './project6.jpg',
              title: 'Stopwatch',
              description: 'A stopwatch is a watch with buttons which you press at the beginning and end of an event, so that you can measure exactly how long it takes.',
              githubLink: 'https://github.com/krushnachandranayak/Stopwatch.git',
              previewLink: 'https://krushnachandranayak.github.io/Stopwatch/'
            }
          ].map((project, index) => (
            <div className="col-md-4 d-flex" key={index}>
              <div className="card mb-4 w-100" style={{ backgroundColor: '#444', transition: 'transform 0.3s' }}>
                <img src={project.imgSrc} className="card-img-top" alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: '#ffcc00' }}>{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-auto">
                    <a href={project.githubLink} className="btn btn-outline-light me-2" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i> GitHub
                    </a>
                    <a href={project.previewLink} className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-eye"></i> Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

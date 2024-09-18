import React from 'react';
import './Tools.css'; // Make sure this CSS file is created

const Tools = () => {
  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/visualstudiocode.svg', color: '#0078D7' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg', color: '#181717' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg', color: '#F05032' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg', color: '#61DAFB' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg', color: '#7952B3' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg', color: '#E34F26' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg', color: '#1572B6' },
    { name: 'ChatGPT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/openai.svg', color: '#1A73E8' } // Replaced Photoshop with ChatGPT
  ];

  return (
    <section id="tools" className="tools-section">
      <div className="container">
        <h2 className="text-center" data-aos="fade-up">Favorite Tools</h2>
        <div className="row justify-content-center">
          {tools.map((tool, index) => (
            <div key={index} className="col-md-2 text-center tool-card" data-aos="fade-up">
              <img
                src={tool.icon}
                alt={tool.name}
                className="tool-icon"
                style={{ backgroundColor: tool.color }} // Add background color dynamically
              />
              <h5>{tool.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

import React from 'react';
import './Tools.css'; // Make sure this CSS file is created

const Tools = () => {
  const tools = [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/visualstudiocode.svg', color: '#0078D7' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg', color: '#181717' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg', color: '#7952B3' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg', color: '#06B6D4' },
    { name:'fontawesome', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/fontawesome.svg', color: '#339AF0' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg', color: '#F24E1E' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/canva.svg', color: '#00C4CC' },
    { name: 'material-ui', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/materialdesignicons.svg', color: '#007FFF' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/postman.svg', color: '#FF6C37' },
    { name: 'ChatGPT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/openai.svg', color: '#1A73E8' } 
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
                style={{ backgroundColor: tool.color }} 
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

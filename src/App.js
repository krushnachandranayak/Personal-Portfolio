import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Tools from './components/Tools';
import './App.css'; // Ensure you have this for global styles

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Tools />
      <Contact />
      <footer id="footer">
        <div className="container text-center">
          <div className="social-links mb-3">
          <p>-:Connect with me on social media:-</p>
            <a href="https://linkedin.com/in/krushna-chandra-nayak-271271218/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/krushnachandranayak" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://twitter.com/@hypersunil3" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.instagram.com/krushnachandranayak0143/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
              <i className="bi bi-instagram"></i>
            </a><a href="https://www.threads.net/@krushnachandranayak0143" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
              <i className="bi bi-threads"></i>
            </a><a href="https://www.facebook.com/sunilkumarnayak0143/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
          <p className="address mb-2">18 Chhendipada, Angul, Odisha, India,759124</p>
          <p className="copyright mb-0">&copy; 2024 Mr. Krushna Chandra Nayak. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

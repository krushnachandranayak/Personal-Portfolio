import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';  // already added earlier
import 'bootstrap/dist/js/bootstrap.bundle.min';  // this will include the JS functionality
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init(); // Initialize AOS



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

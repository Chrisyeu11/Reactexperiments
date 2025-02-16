// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

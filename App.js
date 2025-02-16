// src/App.js
// import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import DarkModeToggle from './components/DarkModeToggle';

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const storedMode = localStorage.getItem('isDarkMode') === 'true';
  //   setIsDarkMode(storedMode);
  // }, []);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  //   localStorage.setItem('isDarkMode', isDarkMode);
  // }, [isDarkMode]);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(prevMode => !prevMode);
  // };

  return (
    <div className="App">
      {/* <Header />
      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} /> */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

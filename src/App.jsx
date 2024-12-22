import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contacts from './components/Contacts.jsx'; // Новый импорт
import Languages from './components/Languages.jsx'; // Новый импорт
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Contacts />
      <Languages />    
      <Footer />
    </>
  );
}

export default App;

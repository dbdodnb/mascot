import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MASCOT from './components/MASCOT';
import About from './components/About';
import Values from './components/Values';
import Participants from './components/Participants';
import Accomodations from './components/Accomodations';
import Team from './components/Team';
import Feedback from './components/Feedback';
import Partners from './components/Partners';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && (
        <div className={`preloader ${!loading ? 'hidden' : ''}`}>
          <Preloader />
        </div>
      )}
      {!loading && (
        <>
          <Header />
          <MASCOT />
          <About />
          <Values />
          <Participants />
          <Accomodations />
          <Team />
          <Feedback />
          <Partners />
          <Faq />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

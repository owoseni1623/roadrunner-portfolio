import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import FooterPage from './Components/Footer/FooterPage';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Service from './Components/Services/Service';
import HitUsUp from './Components/HitUsUp/HitUsUp';
import Connect from './Components/Connect/Connect';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Service />} />
          <Route path="/hitusup" element={<HitUsUp />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
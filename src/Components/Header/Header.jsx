import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`h01_header ${isScrolled ? 'h01_scrolled' : ''}`}>
      <div className="h01_header-content">
        <Link to="/" className="h01_logo-link">
          <img src="/Images/logo1.jpeg" alt="Logo" className="h01_logo-image" />
          <span className="h01_brand-name">Roadrunner Tech Solution</span>
        </Link>
        <nav className={`h01_nav-links ${isMenuOpen ? 'h01_open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/services">Services</Link>
        </nav>
        <Link to="/hitusup" className="h01_cta-button">Hit us up</Link>
        <button className="h01_menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
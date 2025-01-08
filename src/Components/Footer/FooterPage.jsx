import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./FooterPage.css"

const FooterPage = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="logo-text">Your Brand</h2>
          <p>Innovative solutions for complex problems.</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/work">Portfolio</Link>
          <Link to="/services">Services</Link>
          <Link to="/hitusup">Contact</Link>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Youtube size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 roadrunner.org</p>
        <a href="#" className="back-to-top">
          Back to Top <ArrowRight size={16} />
        </a>
      </div>
    </footer>
  );
};

export default FooterPage;
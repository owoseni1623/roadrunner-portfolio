import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faCube, faRocket, faCode, faPalette, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import './Connect.css';

const Connect = () => {
  const [design, setDesign] = useState(1);
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCubeRotation(prev => ({
        x: prev.x + 1,
        y: prev.y + 1
      }));
    }, 50);
    emailjs.init("CXieMuHc4s_BAYi7q");
    return () => clearInterval(interval);
  }, []);

  const switchDesign = () => {
    setDesign((prevDesign) => (prevDesign % 4) + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    console.log("Sending email with the following data:", formData);

    emailjs.send(
      'service_jicibmb',
      'template_nkunixb',
      formData
    )
      .then((result) => {
        console.log('Email sent successfully:', result);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        if (error.text) {
          console.error('Error details:', error.text);
        }
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className={`connect-container design-${design}`}>
      <div className="content-wrapper">
        <section className="info-section">
          <h1>Let's Connect</h1>
          <p className="tagline">Bringing Your Web Ideas to Life</p>
          
          <div className="about-intro">
            <p>I'm a passionate Full Stack Web Developer ready to turn your digital dreams into reality. With a keen eye for design and a love for clean, efficient code, I create web experiences that not only look great but perform exceptionally.</p>
          </div>
          
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p><FontAwesomeIcon icon={faEnvelope} /> owoseni0816@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +234 812 385 5252</p>
            <p><FontAwesomeIcon icon={faGithub} /> github.com/owoseni1623</p>
            <p><FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/Owoseni (Motunrayo) Oluwasesan</p>
          </div>
          
          <div className="showcase-section">
            <div className="cube-container">
              <div className="cube" style={{transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`}}>
                <div className="cube-face front"><FontAwesomeIcon icon={faCube} /></div>
                <div className="cube-face back"><FontAwesomeIcon icon={faRocket} /></div>
                <div className="cube-face right"><FontAwesomeIcon icon={faCode} /></div>
                <div className="cube-face left"><FontAwesomeIcon icon={faPalette} /></div>
                <div className="cube-face top">F</div>
                <div className="cube-face bottom">S</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="form-section">
          <h2>Hit Us Up</h2>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>Send Message <FontAwesomeIcon icon={faPaperPlane} /></>
              )}
            </button>
            {submitStatus === 'success' && <p className="submit-status success">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="submit-status error">Failed to send message. Please try again.</p>}
          </form>
          
          <div className="services-grid">
            <div className="service-card">
              <FontAwesomeIcon icon={faCode} className="service-icon" />
              <h3>Web Development</h3>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faPalette} className="service-icon" />
              <h3>UI/UX Design</h3>
            </div>
            <div className="service-card">
              <FontAwesomeIcon icon={faRocket} className="service-icon" />
              <h3>Performance Optimization</h3>
            </div>
          </div>
        </section>
      </div>
      
      <button className="switch-design-btn" onClick={switchDesign}>
        Switch Design
      </button>
    </div>
  );
};

export default Connect;
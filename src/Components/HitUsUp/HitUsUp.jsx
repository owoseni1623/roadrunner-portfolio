import React, { useState, useEffect } from 'react';
import { Send, Mail, Github, Phone, Linkedin, Loader } from 'lucide-react';
import emailjs from 'emailjs-com';
import "./HitUsUp.css"

const HitUsUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [designVersion, setDesignVersion] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init("CXieMuHc4s_BAYi7q");
  }, []);

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

  const switchDesign = () => {
    setDesignVersion((prev) => (prev % 4) + 1);
  };

  return (
    <div className={`hit-us-up-container design-${designVersion}`}>
      <button onClick={switchDesign} className="switch-design-btn">
        Switch Design
      </button>
      <div className="content-wrapper">
        <div className="info-section">
          <h1>Let's Build Something Amazing Together</h1>
          <p>I'm always excited to take on new challenges and create innovative web solutions. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help!</p>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p><Mail size={18} /> owoseni0816@gmail.com</p>
            <p><Phone size={18} /> +234 812 385 5252</p>
            <p><Github size={18} /> github.com/owoseni1623</p>
            <p><Linkedin size={18} /> linkedin.com/in/Owoseni (Motunrayo) Oluwasesan</p>
          </div>
        </div>
        <div className="form-section">
          <h2>Hit Us Up</h2>
          <form onSubmit={handleSubmit}>
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
              {isSubmitting ? <Loader className="animate-spin" /> : <>Send Message <Send size={18} /></>}
            </button>
            {submitStatus === 'success' && <p className="submit-status success">Message sent successfully!</p>}
            {submitStatus === 'error' && <p className="submit-status error">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HitUsUp;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaRocket, FaCogs } from 'react-icons/fa';
import './Service.css';

const services = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Crafting responsive and intuitive user interfaces using modern frameworks and libraries.",
    technologies: ["React", "Vue.js", "Angular", "HTML5", "CSS3", "JavaScript"]
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description: "Building robust server-side applications and APIs to power your web solutions.",
    technologies: ["Node.js", "Express", "Django", "Ruby on Rails", "PHP"]
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications for iOS and Android devices.",
    technologies: ["React Native", "Flutter", "Ionic", "Swift", "Kotlin"]
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Designing and optimizing database structures for efficient data storage and retrieval.",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"]
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description: "Enhancing the speed and efficiency of your web applications for a seamless user experience.",
    technologies: ["Lazy Loading", "Code Splitting", "Caching", "CDN Integration"]
  },
  {
    icon: <FaCogs />,
    title: "DevOps & Deployment",
    description: "Streamlining development workflows and ensuring smooth deployment of your applications.",
    technologies: ["Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud", "Azure"]
  }
];

const designOptions = [
  { name: "Dark", class: "dark" },
  { name: "Modern", class: "modern" },
  { name: "Classic", class: "classic" },
  { name: "Minimalist", class: "minimalist" },
  { name: "Vibrant", class: "vibrant" }
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [currentDesign, setCurrentDesign] = useState(designOptions[0].class);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedService(prev => (prev === null || prev === services.length - 1) ? 0 : prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`service-container ${currentDesign}`}>
      <div className="design-switcher">
        {designOptions.map((option, index) => (
          <button
            key={index}
            className={`design-option ${currentDesign === option.class ? 'active' : ''}`}
            onClick={() => setCurrentDesign(option.class)}
          >
            {option.name}
          </button>
        ))}
      </div>
      <motion.h1 
        className="service-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Roadrunner Tech Solution
      </motion.h1>
      <motion.p 
        className="service-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Empowering Your Digital Journey with Cutting-Edge Fullstack Solutions
      </motion.p>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className={`service-card ${selectedService === index ? 'active' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-technologies">
              {service.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
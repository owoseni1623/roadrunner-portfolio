import React, { useState, useEffect, useRef } from 'react';
import { Code, Server, Smartphone, Users, ChevronDown, ChevronUp, Mail, MapPin, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [currentDesign, setCurrentDesign] = useState('design-1');
  const cubeRef = useRef(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const switchDesign = () => {
    const designs = ['design-1', 'design-2', 'design-3', 'design-4'];
    const currentIndex = designs.indexOf(currentDesign);
    const nextIndex = (currentIndex + 1) % designs.length;
    setCurrentDesign(designs[nextIndex]);
  };

  useEffect(() => {
    let animationFrameId;
    let rotation = 0;

    const rotateCube = () => {
      rotation += 0.5;
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateY(${rotation}deg) rotateX(20deg)`;
      }
      animationFrameId = requestAnimationFrame(rotateCube);
    };

    rotateCube();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const services = [
    { title: 'Frontend Development', icon: <Code />, description: 'Creating responsive and intuitive user interfaces with modern frameworks.' },
    { title: 'Backend Development', icon: <Server />, description: 'Building robust server-side applications and APIs to power your web solutions.' },
    { title: 'Mobile App Development', icon: <Smartphone />, description: 'Extending your web presence with cross-platform mobile applications.' },
    { title: 'User Experience Design', icon: <Users />, description: 'Crafting engaging and user-friendly experiences that delight your customers.' },
  ];

  const timeline = [
    { date: 'Year 2023', event: 'Enrolled in Fullstack Web Development course at Anchosoft Academy' },
    { date: 'Year 2023', event: 'Completed first major project: Personal portfolio website' },
    { date: 'Year 2023', event: 'Learned and implemented MERN stack (MongoDB, Express, React, Node.js)' },
    { date: 'Year 2023', event: 'Developed a full-featured e-commerce website as capstone project' },
    { date: 'Year 2023', event: 'Successfully graduated from Anchosoft Academy' },
    { date: 'June 2024 - Present', event: 'Actively seeking opportunities and working on personal projects' },
  ];

  return (
    <div className={`hit-us-up-container ${currentDesign}`}>
      <button className="switch-design-btn" onClick={switchDesign}>
        Switch Design
      </button>
      <div className="content-wrapper">
        <div className="info-section">
          <h1>Roadrunner Tech Solution</h1>
          <p className="tagline">Accelerating Your Digital Journey</p>
          <div className="about-intro">
            <p>At Roadrunner Tech Solution, we're more than just developers – we're digital architects, problem solvers, and innovation catalysts. Our passion for cutting-edge technology drives us to deliver exceptional fullstack web solutions that propel businesses forward in the digital landscape.</p>
          </div>
          <div className="contact-info">
            <h2>Connect With Us</h2>
            <p><Mail /> owoseni0816@gmail.com</p>
            <p><Phone /> +234 (81) 238-5252</p>
            <p><MapPin /> 14 Perfecter Street, Awolowo Road, Grammar School, Ikorodu, Lagos State. Nigeria.</p>
          </div>
          
          <div className="showcase-section">
            <div className="cube-container">
              <div className="cube" ref={cubeRef}>
                <div className="cube-face front">React</div>
                <div className="cube-face back">Node.js</div>
                <div className="cube-face right">Vue.js</div>
                <div className="cube-face left">Express</div>
                <div className="cube-face top">MongoDB</div>
                <div className="cube-face bottom">GraphQL</div>
              </div>
            </div>
            
            <div className="timeline-container">
              <h3>My Journey</h3>
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">
                    <Calendar />
                  </div>
                  <div className="timeline-content">
                    <h4>{item.date}</h4>
                    <p>{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="profile-image">
              <img src="/Images/pics.jpg" alt="Roadrunner Tech Solution Founder" />
              <p>Owoseni Oluwasesan, Founder</p>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h2>Our Expertise</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          
          <h2>Our Approach</h2>
      <div className="approach-accordion">
        {['Innovate', 'Collaborate', 'Deliver', 'Adapt', 'Educate', 'Support'].map((item, index) => (
          <div key={index} className="accordion-item">
            <button className="accordion-header" onClick={() => toggleSection(item)}>
              {item}
              {activeSection === item ? <ChevronUp /> : <ChevronDown />}
            </button>
            {activeSection === item && (
              <div className="accordion-content">
                <p>
                  {item === 'Innovate' && 'We stay ahead of the curve with the latest technologies and methodologies, ensuring cutting-edge solutions for your business.'}
                  {item === 'Collaborate' && 'We work closely with you to understand and meet your unique needs, fostering a partnership that drives success.'}
                  {item === 'Deliver' && 'We provide high-quality solutions that exceed expectations and drive tangible results for your business.'}
                  {item === 'Adapt' && 'We quickly adjust to changing market conditions and client requirements, ensuring your project remains relevant and effective.'}
                  {item === 'Educate' && 'We empower our clients with knowledge, helping you understand the technology behind your solutions for better decision-making.'}
                  {item === 'Support' && 'We offer ongoing assistance and maintenance, ensuring your digital solutions continue to perform optimally long after launch.'}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
          
          <div className="cta-section">
            <h2>Ready to Accelerate Your Project?</h2>
            <p>Let's turn your ideas into reality. Contact us today to start your journey with Roadrunner Tech Solution.</p>
            <Link to="/hitusup" className="submit-btn">
              Hit us up <Mail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
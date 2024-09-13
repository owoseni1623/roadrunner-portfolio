import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github, Code, Server, Layers } from 'lucide-react';
import './Work.css';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animatedItems, setAnimatedItems] = useState([]);
  const [currentStyle, setCurrentStyle] = useState('cyberPunk');

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management.",
      image: "/Images/app3.png",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      category: "Full Stack",
      liveLink: "https://food-delivery-mauve-mu.vercel.app/",
      githubLink: "owoseni1623/food-delivery / owoseni1623/food-delivery-api",
      icon: <Layers />
    },
    {
      title: "Task Management App",
      description: "A responsive task manager with collaborative features and real-time updates.",
      image: "/Images/app4.png",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      category: "Full Stack",
      liveLink: "https://tehnotronix-frontend.vercel.app/",
      githubLink: "owoseni1623/Tehnotronix-Frontend",
      icon: <Layers />
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts and historical data.",
      image: "/Images/app5.png",
      technologies: ["React", "D3.js", "Node.js", "OpenWeatherMap API"],
      category: "Frontend",
      liveLink: "https://estate-ecom-qy6t.vercel.app/",
      githubLink: "owoseni1623/Estate-Ecom",
      icon: <Code />
    },
    {
      title: "RESTful API for Blog Platform",
      description: "A scalable and secure API for a content management system with user authentication.",
      image: "/Images/app6.png",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "Frontend",
      liveLink: "https://roadrunner-hotel-booking.vercel.app/",
      githubLink: "owoseni1623/roadrunner-hotel-booking",
      icon: <Server />
    }
  ];

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const styles = ['cyberPunk', 'neonNoir', 'retroWave', 'futureMinimal'];

  useEffect(() => {
    setAnimatedItems([]);
    setTimeout(() => {
      setAnimatedItems(filteredProjects.map((_, index) => index));
    }, 100);
  }, [activeFilter]);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className={`work-section ${currentStyle}`}>
      <div className="work-content">
        <h2 className="section-title">Our Work at Roadrunner Tech Solution</h2>
        <p className="section-subtitle">Innovative solutions across the full stack spectrum</p>

        <div className="style-switcher">
          {styles.map(style => (
            <button
              key={style}
              className={`style-btn ${currentStyle === style ? 'active' : ''}`}
              onClick={() => setCurrentStyle(style)}
            >
              {style}
            </button>
          ))}
        </div>

        <div className="filters">
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${animatedItems.includes(index) ? 'animate' : ''}`}
            >
              <div className="project-image" style={{backgroundImage: `url(${project.image})`}}>
                <div className="project-overlay">
                  <div className="project-icon">{project.icon}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={20} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.liveLink || project.githubLink} target="_blank" rel="noopener noreferrer" className="view-project">
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
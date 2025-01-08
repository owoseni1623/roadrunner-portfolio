import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Github, Mail, Phone, Facebook, Instagram, Twitter, MessageCircle, X } from 'lucide-react';
import EnhancedPhotoGallery from "../EnhancedPhotoGallery/EnhancedPhotoGallery"
import "../EnhancedPhotoGallery/EnhancedPhotoGallery.css";
import "./HomePage.css";

const HomePage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Food Ordering App",
      description: "A seamless platform for ordering delicious meals from local restaurants.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/Images/app3.png",
      githubLink: "https://github.com/yourusername/food-ordering-app",
      liveLink: "https://food-delivery-mauve-mu.vercel.app/"
    },
    {
      id: 2,
      title: "Car Sell App",
      description: "An intuitive marketplace for buying and selling vehicles with advanced search features.",
      technologies: ["React", "Express", "PostgreSQL"],
      image: "/Images/app2.png",
      githubLink: "https://github.com/yourusername/car-sell-app",
      liveLink: "tehnotronix-frontend.vercel.app"
    },
    {
      id: 3,
      title: "Real Estate App",
      description: "A comprehensive platform for property listings, virtual tours, and real estate transactions.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/Images/app.png",
      githubLink: "https://github.com/yourusername/real-estate-app",
      liveLink: "https://estate-ecom-qy6t.vercel.app/"
    },
    {
      id: 4,
      title: "Hotel Listing App",
      description: "An elegant solution for discovering and booking accommodations worldwide.",
      technologies: ["React", "Firebase", "Google Maps API"],
      image: "/Images/app4.png",
      githubLink: "https://github.com/yourusername/hotel-listing-app",
      liveLink: "https://hotel-listing-app-demo.com"
    },
  ];

  const photos = [
    {
      id: 1,
      src: "/Images/pics4.jpg",
      alt: "Owoseni at work",
      info: "Passionate about coding, I often find myself immersed in complex problems, seeking innovative solutions that push the boundaries of what's possible in web development. This passion extends beyond my 9-to-5 job; late into the night, you might find me tinkering with new frameworks or experimenting with cutting-edge technologies. The thrill of solving a particularly challenging bug or optimizing a sluggish piece of code is unparalleled. My areas of expertise span both front-end and back-end development, with a particular fondness for JavaScript and its ever-expanding ecosystem. I'm constantly amazed by the rapid evolution of web technologies and how they're reshaping our digital landscape. This enthusiasm for coding not only drives my career but also serves as a creative outlet, allowing me to build personal projects that blend functionality with innovation."
    },
    {
      id: 2,
      src: "/Images/pics10.jpg",
      alt: "Owoseni with family",
      info: "Family is my anchor and inspiration. As a husband and father of two, I strive to balance my professional aspirations with quality family time, creating memories that last a lifetime. Our home is filled with laughter, love, and the occasional chaos that comes with raising young children. Weekends are sacred, often spent on family adventures - from local park picnics to day trips exploring nearby towns. These moments, though simple, are the threads that weave the rich tapestry of our family life. My role as a parent has taught me invaluable lessons in patience, empathy, and time management - skills that seamlessly translate into my professional life. The joy of watching my children grow and learn fuels my own desire for continuous improvement, both as a parent and a professional."
    },
    {
      id: 3,
      src: "/Images/pics8.jpg",
      alt: "Owoseni volunteering",
      info: "Giving back to the community is a core value of mine. I regularly volunteer at local tech meetups, sharing my knowledge and experiences to inspire the next generation of developers. These sessions are more than just teaching opportunities; they're a chance to connect with budding programmers, understand their challenges, and offer guidance based on my own journey in the tech world. Beyond meetups, I've started mentoring junior developers in my spare time, providing them with practical advice and emotional support as they navigate the often overwhelming world of professional programming. There's an immense satisfaction in seeing these young talents grow and succeed, knowing I played a small part in their development."
    },
    {
      id: 4,
      src: "/Images/pics0.jpg",
      alt: "Owoseni at a tech conference",
      info: "Continuous learning is key in the ever-evolving tech world. I actively participate in tech conferences, expanding my network and staying updated with the latest industry trends and innovations. These events are not just about absorbing information; they're opportunities to engage in stimulating discussions with peers, challenge my own assumptions, and gain fresh perspectives on familiar problems. My learning doesn't stop at conferences. I'm an avid reader of tech blogs, a regular listener of developer podcasts, and I always have an online course or two in progress. This commitment to ongoing education ensures that my skills remain sharp and relevant in an industry where change is the only constant."
    },
    {
      id: 5,
      src: "/Images/pics1.jpg",
      alt: "Owoseni's childhood home",
      info: "My journey in technology began in the vibrant streets of Lagos, Nigeria. Growing up in a close-knit community, I was fascinated by computers from an early age. With limited resources but unlimited curiosity, I taught myself programming using borrowed textbooks and community computer centers, laying the foundation for my future in tech."
    },
    {
      id: 6,
      src: "/Images/pics.jpg",
      alt: "Owoseni brainstorming",
      info: "Known for my analytical mind and creative problem-solving skills, I thrive on challenges that others might find daunting. My colleagues often describe me as a 'tech optimist' – someone who sees the potential for positive change in every line of code. This enthusiasm, combined with a meticulous attention to detail, drives me to create elegant, efficient solutions."
    }
  ];

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
              <div className="hero-image">
                <img src="/Images/pics12.jpg" alt="Owoseni Oluwasesan Motunrayo" />
              </div>
          <div className="hero-text">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Owoseni Oluwasesan Motunrayo
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer | Innovation Enthusiast | Problem Solver
            </motion.p>
          </div>
        </div>
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <div className="about-content">
          
          <div className="about-text">
            <p>As a recent graduate of Anchorsoft Academy's full stack program, I bring a fresh perspective and cutting-edge skills to the world of web development. My passion for crafting innovative digital solutions is matched only by my enthusiasm for tackling complex challenges head-on.</p>
            <p>With a solid foundation in both front-end and back-end technologies, I specialize in creating seamless, user-centric web applications that not only meet but exceed client expectations. My approach combines creativity with technical prowess, ensuring that every project I touch is both visually stunning and functionally robust.</p>
            <p>I thrive in collaborative environments where I can contribute my ideas while learning from experienced professionals. My goal is to leverage my skills and knowledge to create impactful solutions that drive business growth and enhance user experiences in the digital realm.</p>
            <p><strong>Marital Status:</strong> Married with 2 kids</p>
          </div>
          <div className="profile-image">
            <img src="/Images/pics14.jpg" alt="Owoseni Oluwasesan Motunrayo" />
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="contact-details">
          <div className="contact-item">
            <Mail size={24} />
            <a href="mailto:owoseni0816@gmail.com">owoseni0816@gmail.com</a>
          </div>
          <div className="contact-item">
            <Phone size={24} />
            <a href="tel:+2348123855252">+234 812 385 5252</a>
          </div>
          <div className="contact-item">
            <Facebook size={24} />
            <a href="https://www.facebook.com/owoseni.oluwasesan.motunrayo" target="_blank" rel="noopener noreferrer">Owoseni Oluwasesan Motunrayo</a>
          </div>
          <div className="contact-item">
            <Instagram size={24} />
            <a href="https://www.instagram.com/omooba_owoseni" target="_blank" rel="noopener noreferrer">@omooba_owoseni</a>
          </div>
          <div className="contact-item">
            <Twitter size={24} />
            <a href="https://twitter.com/motunrayo0816" target="_blank" rel="noopener noreferrer">@motunrayo0816</a>
          </div>
          <div className="contact-item">
            <MessageCircle size={24} />
            <a href="https://wa.me/2348123855252" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frameworks</h3>
            <ul>
              <li>React</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {hoveredProject === project.id && (
                  <div className="project-overlay">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={24} />
                      <span>View Code</span>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={24} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Anchorsoft Academy</h3>
          <p>Full Stack Web Development Program</p>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Certificate of Attendance - Anchorsoft Academy</li>
          <li>Certificate in Professional Development - Anchorsoft Academy</li>
        </ul>
      </section>

      <EnhancedPhotoGallery />

      <section className="cta">
        <h2>Ready to collaborate on your next project?</h2>
        <Link to="/connect" className="cta-button">
          Let's Connect
          <ChevronRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const EnhancedPhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showIndicator, setShowIndicator] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setShowIndicator(false);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="gallery">
      <h2>Photo Gallery</h2>
      <p className="gallery-instruction">Click on an image to learn more about my journey and experiences.</p>
      <div className="photo-grid">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            className="photo-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal(photo)}
          >
            <img src={photo.src} alt={photo.alt} />
            <AnimatePresence>
              {showIndicator && (
                <motion.div
                  className="click-indicator"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <ZoomIn size={24} />
                  <span>Click to explore</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeModal}>
                <X size={24} />
              </button>
              <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
              <p>{selectedPhoto.info}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EnhancedPhotoGallery;
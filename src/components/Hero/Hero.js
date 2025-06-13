import React from 'react';
import { ReactTyped } from 'react-typed';
import { Player } from '@lottiefiles/react-lottie-player';
import devAnimation from '../../assets/devAnimation.json';
import javaIcon from '../../assets/java.png';
import reactIcon from '../../assets/react.png';
import springIcon from '../../assets/spring.png';
import postgresIcon from '../../assets/postgresql.png';
import { motion } from 'framer-motion';

const techIcons = [
  { src: javaIcon, alt: 'Java' },
  { src: reactIcon, alt: 'React' },
  { src: springIcon, alt: 'Spring Boot' },
  { src: postgresIcon, alt: 'PostgreSQL' },
];


function Hero() {
  return (
    <section
      className="hero-section text-white d-flex align-items-center"
      style={{
        minHeight: '70vh',
        background: 'linear-gradient(135deg, #1a1a40, #0f2027)',
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Column 1: Animated Text */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="mb-3 fw-bold">
              Hi, I'm <span style={{ color: '#FFDD00' }}>Varsha</span>
            </h1>
            <h3>
              <ReactTyped
                strings={[
                  'Java Full Stack Developer',
                  'React & Spring Boot Expert',
                  'Backend Integration Specialist',
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </h3>
          </div>

          {/* Column 2: Animation and Icons */}
          <div className="col-md-4 text-center  ">
            {/* Lottie Animation */}
            <Player
              autoplay
              loop
              src={devAnimation}
              style={{ height: '0px', width: 'px' }}
            />
            {/* Tech Icons */}
                 <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
  {techIcons.map((icon, index) => (
    <motion.img
      key={index}
      src={icon.src}
      alt={icon.alt}
      width="50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.2, rotate: 5 }}
    />
  ))}
</div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Cards from '../Cards/Cards';
import TinotendaMupasiriCV from './TinotendaMupasiriCV.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: 'spring' };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>Services</span>
        <span>
          Services include web and graphic design, Full-Stack web development ,
          website hosting and <br />
          maintenance and Digital Marketing at affordable prices. Main
          <br /> tech-stack used includes React, Node, MongoDB and CSS. Other
          tools
          <br /> used are Firebase, Emailjs, MongoDB Atlas.
        </span>
        <a
          href={TinotendaMupasiriCV}
          download
          style={{ textDecoration: 'none' }}
        >
          <div className="button s-button">Download CV</div>
        </a>
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          style={{ left: '14rem' }}
        >
          <Cards
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Photoshop, Adobe, Adobe XD, MS Word'}
          />
        </motion.div>
        <motion.div
          initial={{ left: '-12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
          style={{ top: '12rem', left: '-4rem' }}
        >
          <Cards
            emoji={Glasses}
            heading={'Developer'}
            detail={'HTML, React, Node, MongoDB, Javascript, CSS'}
          />
        </motion.div>
        <motion.div
          initial={{ left: '22rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
          style={{ top: '19rem', left: '12rem' }}
        >
          <Cards
            emoji={Humble}
            heading={'UI/UX'}
            detail={'User interface design and mockup services are included.'}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

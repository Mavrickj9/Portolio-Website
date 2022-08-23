import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {
  const transition = { duration: '2', type: 'spring' };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I Am</span>
          <span>Tinotenda Mupasiri</span>
          <span>
            Full - Stack developer with experience in web development using
            React, Node and MongoDB. Services include designing, troubleshooting
            and hosting multipage websites
          </span>
        </div>
        <Link spy={true} to="contact" smooth={true} activeClass="activeClass">
          <div className="button i-button">Hire me</div>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Mavrickj9">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/tinotenda-mupasiri-663ab4203/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/t_mavrick/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: '-4%', left: '78%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }}
          className="floatingDiv"
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: '9rem', top: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '0rem' }}
          className="floatingDiv"
        >
          <FloatingDiv image={thumbup} txt1="Certified Best" txt2="Designer" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: '#c1f5ff',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;

import React from 'react';
import './Works.css';
import Amazon from '../../img/amazon.png';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>
          Works for all these
        </span>
        <span>Brands & Clients</span>
        <span>
          All services are compatible with all common online brands including
          <br />
          e-commerce brands like amazon and shopify. Digital Marketing servieces
          <br />
          expand to most socila media platforms.
        </span>
        <Link spy={true} to="contact" smooth={true}>
          <div className="button s-button">Hire Me</div>
        </Link>
        <div className="blur s-blur" style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 270 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
        </motion.div>

        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

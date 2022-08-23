import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} className="f-img" />
      <div className="f-content">
        <span className="f-email">tmupasiri123@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/t_mavrick/">
            <Insta color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/tinotenda-mupasiri-663ab4203/">
            <LinkedIn color="white" size="3rem" />
          </a>
          <a href="https://github.com/Mavrickj9">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { CityLogo } from '../ui/icons';

const Footer = () => {
    return (
        <footer className="bck-blue">
          <div className="footer-logo">
            <CityLogo
              width="70px"
              height="70px"
              link={true}
              linkTo="/"
            />
          </div>
          <div className="footer-disclaimer">
            Manchester City 2018. All rights reserved.
          </div>
        </footer>
    );
}

export default Footer;

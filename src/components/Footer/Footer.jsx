import React from 'react';
import './Footer.css';
import { contatcUs, footerLink, footerLogo } from '../../constant/footerData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-left">
          <img src={footerLogo} alt="logo" />
          <p>
            <strong>Inshorts </strong>
            <span>
              Pte. Ltd. <br /> ©COPYRIGHT 2023
            </span>
          </p>
        </div>
        <div className="line" />
        <div className="footer__content-right">
          <img src={contatcUs} alt="contact us" />
          <p>
            Terms & conditions <br />
            Privacy Policies
          </p>
        </div>
      </div>
      <div className="footer__links">
        <span className="name">Inshorts clone made by - Avinash</span>

        <div className="iconContainer">
          {footerLink.map(({ url, Icon, id }) => (
            <a key={id} href={url} target="__blank" rel="noopener noreferrer">
              <img src={Icon} alt="SocialIcon" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* <div className="iconContainer">
    <a href="https://www.facebook.com" target="__blank">
      <img src={facebookIcon} alt="facebookIcon" />
    </a>
    <a href="https://www.twitter.com" target="__blank">
      <img src={twitterIcon} alt="twitterIcon" />
    </a>
    <a href="https://www.linkedin.com" target="__blank">
      <img src={linkedInIcon} alt="linkedInIcon" />
    </a>
 </div> 
*/

import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>
      <div className="footer-btn">
        <p>Request early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer_links-logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Created by Ayush Chauhan, All Rights Reserved!</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Profiles</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>aayushchauhanrajput47@gmail.com</p>
          <p>+91 8265971700</p>
          <p>I live in India</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2022- All Rights Reserved by Ayush Chauhan</p>
      </div>
    </div>
  );
};

export default Footer;

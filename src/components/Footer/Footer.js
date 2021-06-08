import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <footer>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <img
              src={require("../../images/logo.png").default}
              className="footer__img"
              alt="logo"
              onClick={scrollToTop}
            />
          </div>
          <div className="footer__adres">
            <p>
              Pizzeria Kuchcik
              <br />
              email: kuchcik@kucharz.pl
              <br />
              ul. Koralowa 10
              <br />
              80-180 Gdańsk
            </p>
          </div>
          <div className="footer__contact">
            <p>
              tel. 000 000 000 <br />
              111 111 111
            </p>
          </div>
          <div className="footer__copyrights">
            <small>
              {" "}
              Kuchcik © {new Date().getFullYear()} All rights reserved.
            </small>
          </div>
          <div className="footer__socials">
            <Link
              to="//www.facebook.com"
              target="_blank"
              aria-label="facebook"
              className="footer__link"
            >
              <FaFacebook className="social__icon" />
            </Link>

            <Link
              to="//www.instagram.com"
              target="_blank"
              aria-label="instagram"
              className="footer__link"
            >
              <FaInstagram className="social__icon" />
            </Link>

            <Link
              to="//www.twitter.com"
              target="_blank"
              aria-label="instagram"
              className="footer__link"
            >
              <FaTwitter className="social__icon" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

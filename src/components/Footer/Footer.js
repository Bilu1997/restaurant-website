import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <img
              src={require("../../images/logo.png").default}
              className="footer__img"
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
            <FaFacebook className="social__icon" />
            <FaInstagram className="social__icon" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

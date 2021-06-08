import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <div className="logo__container">
          <img
            src={require("../../images/logo.png").default}
            alt="logo"
            className="nav__logo"
            onClick={scrollToTop}
          />
        </div>
        <div className="mobile__icon" onClick={handleClick}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={open ? "mobile__menu" : "nav__menu"}>
          {/*<a className={open ? "nav__links--mobile" : "nav__links"} href="/"></a>*/}
          <Link
            className={open ? "nav__links--mobile" : "nav__links"}
            to="onas"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={50}
          >
            O nas
          </Link>

          <Link
            className={open ? "nav__links--mobile" : "nav__links"}
            to="kontakt"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={50}
          >
            Kontakt
          </Link>

          <Link
            className={open ? "nav__links--mobile" : "nav__links"}
            to="menu"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={50}
          >
            Menu
          </Link>

          <Link
            className={open ? "nav__links--mobile" : "nav__links"}
            to="promo"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={50}
          >
            Promocje
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

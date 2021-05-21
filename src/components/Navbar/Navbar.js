import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

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

  return (
    <>
      <nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <div className="mobile-icon" onClick={handleClick}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={open ? "mobile--menu" : "nav--menu"}>
          <li>
            <a className={open ? "nav-links--mobile" : "nav-links"} href="/">
              O nas
            </a>
          </li>
          <li>
            <a className={open ? "nav-links--mobile" : "nav-links"} href="/">
              Menu
            </a>
          </li>
          <li>
            <a className={open ? "nav-links--mobile" : "nav-links"} href="/">
              Promocje
            </a>
          </li>
          <li>
            <a className={open ? "nav-links--mobile" : "nav-links"} href="/">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <div className="logo__container">
          <img
            src={require("../../images/logo.png").default}
            alt="logo"
            className="nav__logo"
          />
        </div>
        <div className="mobile__icon" onClick={handleClick}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={open ? "mobile__menu" : "nav__menu"}>
          <li>
            <a className={open ? "nav__links--mobile" : "nav__links"} href="/">
              O nas
            </a>
          </li>
          <li>
            <a className={open ? "nav__links--mobile" : "nav__links"} href="/">
              Menu
            </a>
          </li>
          <li>
            <a className={open ? "nav__links--mobile" : "nav__links"} href="/">
              Promocje
            </a>
          </li>
          <li>
            <a className={open ? "nav__links--mobile" : "nav__links"} href="/">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

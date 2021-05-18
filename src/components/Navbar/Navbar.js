import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <>
      <nav className="navbar__image">
        <div className="mobile__icon" onClick={handleClick}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={open ? "mobile--menu" : "nav--menu"}>
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

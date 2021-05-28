import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="background__container " alt="HeroImg">
        <div className="background__image" />
        <div className="hero__wrapper">
          <h1 className="hero__h1">Pizzeria Kuchcik</h1>
          <p className="hero__p">
            Z pasji do smacznej kuchni! Zapoznaj się z naszym menu!
          </p>
          <Link
            className="hero__button"
            to="menu"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            delay={50}
          >
            MENU
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="background__container">
        <div className="hero__wrapper">
          <h1 className="hero__h1">Pizzeria Kuchcik</h1>
          <p className="hero__p">
            Z pasji do smacznej kuchni! Zapoznaj się z naszym menu!
          </p>
          <button to="/menu" className="hero__button">
            MENU
          </button>
        </div>
        <img className="background__image" alt="HeroImg" />
      </div>
    </>
  );
};

export default Hero;

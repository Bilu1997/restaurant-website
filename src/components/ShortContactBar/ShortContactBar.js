import React from "react";
import "./ShortContactBar.css";
import { RiPhoneFill, RiMapPin2Fill, RiTimer2Fill } from "react-icons/ri";

const ShortContactBar = () => {
  return (
    <>
      <div className="contact__container">
        <div className="card__container card__left">
          <RiPhoneFill className="card__icon" />
          <h1 className="card__h1">Zadzwoń do nas</h1>
          <p className="card__p">
            000 000 000 <br />
            111 111 111
          </p>
        </div>
        <div className="card__container card__right">
          <RiMapPin2Fill className="card__icon" />
          <h1 className="card__h1">Gdzie jesteśmy?</h1>
          <p className="card__p">
            Pizzeria Kuchcik
            <br />
            ul. Koralowa 10
            <br />
            80-180 Gdańsk
          </p>
        </div>
        <div className="card__container card__down">
          <RiTimer2Fill className="card__icon" />
          <h1 className="card__h1">Godziny otwarcia</h1>
          <p className="card__p">
            pn-czw: 12:00 - 22:00
            <br />
            pt-sb: 12:00 - 24:00
            <br />
            nd: 12:00 - 23:00
          </p>
        </div>
      </div>
    </>
  );
};

export default ShortContactBar;

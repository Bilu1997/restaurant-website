import React from "react";
import "./Promotions.css";

const Promotions = () => {
  return (
    <>
      <div className="promo__container" id="promo">
        <div className="promo__row">
          <div className="column__left">
            <img
              src={require("../../images/delivery.svg").default}
              className="promo__img"
            />
          </div>
          <div className="column__right">
            <h2 className="promo__header">Przy zamówienia powyżej 50zł</h2>
            <p className="promo__text">
              Darmowa dostawa na terenie Gdańsk Śródmieście
              <br />
              Pepsi 850ml GRATIS
            </p>
          </div>
        </div>
        <div className="promo__row reverse">
          <div className="column__right">
            <h2 className="promo__header">Przy zakupie trzech pizz</h2>
            <p className="promo__text">Czwarta pizza GRATIS!</p>
          </div>
          <div className="column__left">
            <img
              src={require("../../images/pizza.svg").default}
              className="promo__img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;

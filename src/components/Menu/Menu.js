import React from "react";
import "./Menu.css";
import { Data, Data2 } from "./Data";

const Menu = () => {
  const data = Data.map((d, i) => (
    <ul className="menu__list" key={i}>
      <li>
        <div className="pizza__name" key={i.name}>
          {d.name}
        </div>
        <div className="pizza__ingredients" key={i.ingredients}>
          {d.ingredients}
        </div>
        <div className="pizza__thirty" key={i.thirty}>
          30cm - {d.thirty}
        </div>
        <div className="pizza__fourty" key={i.fourty}>
          40cm - {d.fourty}
        </div>
      </li>
    </ul>
  ));

  const dataDrink = Data2.map((d, i) => (
    <ul className="menu__list" key={i}>
      <li>
        <div className="pizza__name" key={i.name}>
          {d.name}
        </div>
        <div className="pizza__ingredients" key={i.size}>
          {d.size}
        </div>
        <div className="pizza__thirty" key={i.price}>
          cena: {d.price}
        </div>
      </li>
    </ul>
  ));

  return (
    <>
      <div className="menu__container" id="menu">
        <img
          className="background__left"
          src={require("../../images/menu-2.png").default}
          alt="menu-2"
        />
        <div className="menu__wrapper">
          <div className="menu__title">
            <h2 className="menu__h2">MENU</h2>
            <h3 className="menu__h3">Pizza</h3>
          </div>

          {data}
          <div className="menu__title">
            <h3 className="menu__h3">Napoje</h3>
          </div>
          {dataDrink}
        </div>
        <img
          className="background__right"
          src={require("../../images/menu-1.png").default}
          alt="menu-1"
        />
      </div>
    </>
  );
};

export default Menu;

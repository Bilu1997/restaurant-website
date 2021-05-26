import React from "react";
import "./Menu.css";
import Data from "./Data";

const Menu = () => {
  const data = Data.map((d, i) => (
    <ul className="menu__list" key={i}>
      <li key={i.nr}>
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

  return (
    <>
      <div className="menu__container">
        <div className="menu__wrapper">
          <div className="menu__title">MENU</div>
          {data}
        </div>
      </div>
    </>
  );
};

export default Menu;

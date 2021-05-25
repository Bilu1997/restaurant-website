import React, { useState } from "react";
import "./Menu.css";
import Data from "./Data";

const Menu = () => {
  const [price, setPrice] = useState(true);
  const handlePrice = () => setPrice(!price);

  const data = Data.map((d, i) => (
    <ul className="menu__list">
      <li key={d.nr}>
        <div className="pizza__name">{d.name}</div>
        <div className="pizza__ingredients">{d.ingredients}</div>
        <div className="pizza__thirty">30cm {d.thirty} </div>
        <div className="pizza__fourty">40cm - {d.fourty}</div>
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

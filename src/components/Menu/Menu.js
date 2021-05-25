import React, { useState } from "react";
import "./Menu.css";
import Data from "./Data";

const Menu = () => {
  const [price, setPrice] = useState(true);
  const handlePrice = () => setPrice(!price);

  const data = Data.map((d, i) => (
    <tr key={i}>
      <td className="menu__td" key={d.nr}>
        {d.nr}
      </td>
      <td className="menu__td" key={d.name}>
        {d.name}
      </td>
      <td className="menu__td" key={d.ingredients}>
        {d.ingredients}
      </td>
      <td className="menu__td" key={d.thirty}>
        {price ? d.thirty : d.fourty}
      </td>
    </tr>
  ));

  return (
    <div className="menu__container">
      <div className="button__wrapper"></div>
      <div className="menu__wrapper">
        <table className="menu__table">
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>
                {" "}
                <button className="menu__size--button" onClick={handlePrice}>
                  30cm/40cm
                </button>
              </th>
            </tr>
            <tr>
              <th>Nr</th>
              <th>Nazwa</th>
              <th>Składniki</th>
              <th>{price ? "30cm" : "40cm"}</th>
            </tr>
            {data}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;

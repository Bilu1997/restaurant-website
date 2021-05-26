import React from "react";
import "./ImagesBar.css";

const ImagesBar = () => {
  return (
    <div className="bar__container">
      <div className="img__container">
        <img
          className="bar__img img__left"
          src={require("../../images/img-1.jpg").default}
        />
        <img
          className="bar__img img__right"
          src={require("../../images/img-2.jpg").default}
        />
        <img
          className="bar__img img__down"
          src={require("../../images/img-3.jpg").default}
        />
      </div>
    </div>
  );
};

export default ImagesBar;

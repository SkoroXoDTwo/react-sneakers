import React from "react";
import { Link } from "react-router-dom";
import "./PopupСonfirmation.scss";

const PopupWithСonfirmation = ({ title, text, hasButton }) => {
  return (
    <div className="popup" onClick={() => console.log("fdf")}>
      <div className="popup__container">
        <button className="popup__close-btn"></button>
      </div>
    </div>
  );
};

export default PopupWithСonfirmation;

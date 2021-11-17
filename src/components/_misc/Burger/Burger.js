import React from "react";
import "./burger.css";
import classNames from "classnames";
import useBurger from "./useBurger";

export default function Burger({ additionalClass }) {
  const { handleBurgerClick } = useBurger();

  return (
    <div
      onClick={handleBurgerClick}
      className={classNames("burger", additionalClass)}
    >
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
    </div>
  );
}

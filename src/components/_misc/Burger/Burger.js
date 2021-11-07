import React from "react";
import "./burger.css";
import { toggleMobileMenu } from "../../../dataStore/mobileMenuSlice";
import { toggleOverlay } from "../../../dataStore/overlaySlice";
import { useDispatch } from "react-redux";

import classNames from "classnames";

export default function Burger({ additionalClass }) {
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(toggleMobileMenu(""));
    dispatch(toggleOverlay(""));
  };

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

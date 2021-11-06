import React from "react";
import "./burger.css";
import { toggleMobileMenu } from "../../../dataStore/mobileMenuSlice";
import { useDispatch } from "react-redux";

import classNames from "classnames";

export default function Burger({ additionalClass }) {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleMobileMenu(""));
  };

  return (
    <div onClick={toggleMenu} className={classNames("burger", additionalClass)}>
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
      <div className="burger__bar"></div>
    </div>
  );
}

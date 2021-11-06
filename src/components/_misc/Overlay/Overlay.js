import React from "react";
import "./overlay.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { hideMobileMenu } from "../../../dataStore/mobileMenuSlice";

import classNames from "classnames";

export default function Overlay() {
  const dispatch = useDispatch();

  const hideMenu = () => {
    dispatch(hideMobileMenu(""));
  };

  const isMobileMenuShown = useSelector((state) => state.mobileMenu.isShown);

  return (
    <div
      onClick={hideMenu}
      className={classNames("overlay", { shown: isMobileMenuShown })}
    ></div>
  );
}

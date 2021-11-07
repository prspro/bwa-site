import React from "react";
import "./overlay.css";

import { useSelector, useDispatch } from "react-redux";

import { hideOverlay } from "../../../dataStore/overlaySlice";
import { hideMobileMenu } from "../../../dataStore/mobileMenuSlice";

import classNames from "classnames";

export default function Overlay() {
  const dispatch = useDispatch();

  const handleOverlayClick = () => {
    dispatch(hideOverlay(""));
    dispatch(hideMobileMenu(""));
  };

  const isOverlayShown = useSelector((state) => state.overlay.isShown);

  return (
    <div
      onClick={handleOverlayClick}
      className={classNames("overlay", { shown: isOverlayShown })}
    ></div>
  );
}

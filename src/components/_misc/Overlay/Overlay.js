import React from "react";
import "./overlay.css";
import useOverlay from "./useOverlay";
import classNames from "classnames";

export default function Overlay() {
  const { handleOverlayClick, isOverlayShown } = useOverlay();

  return (
    <div
      onClick={handleOverlayClick}
      className={classNames("overlay", { shown: isOverlayShown })}
    ></div>
  );
}

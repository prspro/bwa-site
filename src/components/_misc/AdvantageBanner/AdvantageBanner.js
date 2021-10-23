import React from "react";
import "./advantagebanner.css";
import Image from "../Image/Image";
import classNames from "classnames";

export default function AdvantageBanner({
  imageSrc,
  imageAlt,
  blockTitle,
  blockText,
  isLight,
}) {
  // const picture2path = "/img/content-pic2.png";
  return (
    <div className="advantage-banner">
      <Image
        src={imageSrc}
        alt={imageAlt}
        pictureClass={"advantage-banner__bg-pic"}
      />
      <div
        className={classNames("advantage-banner__text-box", {
          "advantage-banner__text-box--light": isLight,
        })}
      >
        <h3>{blockTitle}</h3>
        {blockText}
      </div>
    </div>
  );
}

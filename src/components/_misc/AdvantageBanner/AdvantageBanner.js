import React from "react";
import "./advantagebanner.css";
import Image from "../Image/Image";
import classNames from "classnames";
import parse from "html-react-parser";

export default function AdvantageBanner({
  imageSrc,
  imageAlt,
  blockTitle,
  blockText,
  isLight,
}) {
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
        <h3>{parse(blockTitle)}</h3>
        {parse(blockText)}
      </div>
    </div>
  );
}

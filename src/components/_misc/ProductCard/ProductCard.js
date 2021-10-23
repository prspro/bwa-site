import React from "react";
import "./productcard.css";
import Image from "../Image/Image";
import Button from "../Button/Button";

export default function ProductCard({ props }) {
  const { pic, title, shortDescription } = props;
  return (
    <div className="product-card">
      <Image src={pic.src} alt={pic.alt} pictureClass={"product-card__pic"} />
      <div className="product-card__text-wrap">
        <h3 className="product-card__title">{title}</h3>
        {shortDescription}
      </div>
      <Button slug={"."} buttonClass={"btn--blue product-card__btn"} />
    </div>
  );
}

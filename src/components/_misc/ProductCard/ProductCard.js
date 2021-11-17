import React from "react";
import "./productcard.css";
import Image from "../Image/Image";
import Button from "../Button/Button";
import parse from "html-react-parser";

export default function ProductCard({ props }) {
  const { picSrc, translatablePart } = props;

  return (
    <div className="product-card">
      <Image
        src={picSrc}
        alt={translatablePart.picAlt}
        pictureClass={"product-card__pic"}
      />
      <div className="product-card__text-wrap">
        <h3 className="product-card__title">{parse(translatablePart.title)}</h3>
        {parse(translatablePart.shortDescription)}
      </div>
      <Button slug={"."} buttonClass={"btn--blue product-card__btn"} />
    </div>
  );
}

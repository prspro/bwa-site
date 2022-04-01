import React from "react";
import Button from "../_misc/Button/Button";
import Image from "../_misc/Image/Image";
import parse from "html-react-parser";
import useHero from "./useHero";
import "./hero.css";

export default function Hero() {
  const {
    headerTranslatedData,
    heroImagePath,
    heroImageAlt,
  } = useHero();
  return (
    <div className="hero pt-lrg pb-lrg">
      <div className="container">
        <div className="row">
          <div className="hero__text-wrap">
            <h1>{parse(headerTranslatedData.translatablePart.title)}</h1>
            {parse(headerTranslatedData.translatablePart.shortDescription)}
            <div className="hero__slug-btn-wrap">
              <Button slug="." buttonClass="btn--blue" />
            </div>
          </div>
          <Image
            src={heroImagePath}
            alt={heroImageAlt}
            pictureClass="hero__hero-picture"
          />
        </div>
      </div>
    </div>
  );
}

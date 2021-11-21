import React from "react";
import Navigation from "../Navigation/Navigation";
import Button from "../_misc/Button/Button";
import Burger from "../_misc/Burger/Burger";
import Image from "../_misc/Image/Image";
import "./header.css";
import classNames from "classnames";
import useHeader from "./useHeader";
import LanguageSwitcher from "../_misc/LanguageSwitcher/LanguageSwitcher";
import parse from "html-react-parser";

export default function Header() {
  const {
    headerTranslatedData,
    heroImagePath,
    heroImageAlt,
    logoPath,
    isMobileMenuShown,
  } = useHeader();
  return (
    <header className="header pt-x-lrg pb-xxx-lrg">
      <div className="container">
        <div className="row">
          <div className="header__bar">
            <a href="#" className="logo header__logo">
              <img src={logoPath} loading="lazy" alt="logo" />
            </a>
            <div
              className={classNames("header__navigation", {
                shown: isMobileMenuShown,
              })}
            >
              <Burger additionalClass={"on-mob"} />
              <Navigation />
              <LanguageSwitcher additionalClass={"on-mob"} />
            </div>
            <LanguageSwitcher additionalClass={"on-dt"} />
            <Burger additionalClass={"header__burger"} />
          </div>
          <div className="header__text-wrap">
            <h1>{parse(headerTranslatedData.translatablePart.title)}</h1>
            {parse(headerTranslatedData.translatablePart.shortDescription)}
            <div className="header__slug-btn-wrap">
              <Button slug="." buttonClass="btn--blue" />
            </div>
          </div>
          <Image
            src={heroImagePath}
            alt={heroImageAlt}
            pictureClass="header__hero-picture"
          />
        </div>
      </div>
    </header>
  );
}

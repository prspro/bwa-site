import React from "react";
import Navigation from "../Navigation/Navigation";
import Button from "../_misc/Button/Button";
import Image from "../_misc/Image/Image";
import "./header.css";
import { headerData } from "../../data/initialData";

export default function Header() {
  const heroImagePath = "/img/hero-picture.png";
  const logoPath = "/img/svg/logo.svg";
  return (
    <header className="header pt-x-lrg pb-xxx-lrg">
      <div className="container">
        <div className="row">
          <div className="header__bar">
            <a href="#" className="logo header__logo">
              <img src={logoPath} loading="lazy" alt="logo" />
            </a>
            <div className="header__navigation">
              <Navigation />
            </div>
            <button className="header__search-btn"></button>
            <div className="header__burger burger">
              <div className="burger__bar"></div>
              <div className="burger__bar"></div>
              <div className="burger__bar"></div>
            </div>
          </div>
          <div className="header__text-wrap">
            <h1>{headerData.title}</h1>
            {headerData.shortDescription}
            <div className="header__slug-btn-wrap">
              <Button slug="." buttonClass="btn--blue" />
            </div>
          </div>
          <Image
            src={heroImagePath}
            alt="ablalalabla"
            pictureClass="header__hero-picture"
          />
        </div>
      </div>
    </header>
  );
}

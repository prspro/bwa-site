import React from "react";
import Navigation from "../Navigation/Navigation";
import Button from "../_misc/Button/Button";
import Image from "../_misc/Image/Image";
import "./header.css";
// import logo from "../../img/svg/logo.svg";
// import heroImageOriginal from "../../img/hero-picture.png";
// import heroImageWebp from "../../img/hero-picture.webp";

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
          </div>
          <div className="header__text-wrap">
            <h1>Representing Drone Light</h1>
            <p>
              Look up the sky and beautiful world with simple navigation. Just
              record and get a lot memories to share, lightly and fast like a
              lightning
            </p>
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

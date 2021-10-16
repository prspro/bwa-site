import React from "react";
import Navigation from "../Navigation/Navigation";
import Button from "../Misc/Button/Button";
import logo from "../img/svg/logo.svg";
import "./header.css";
import heroImageOriginal from "../img/hero-picture.png";
import heroImageWebp from "../img/hero-picture.webp";

export default function Header() {
  return (
    <header className="header pt-x-lrg pb-xxx-lrg">
      <div className="container">
        <div className="row">
          <div className="header__bar">
            <a href="#" className="logo header__logo">
              <img src={logo} loading="lazy" alt="logo" />
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
              <Button />
            </div>
          </div>
          <picture>
            <source srcSet={heroImageOriginal} type="image/webp" />
            <source srcSet={heroImageOriginal} type="image/png" />
            <img
              className="header__hero-picture"
              loading="lazy"
              src={heroImageWebp}
              alt="hero drone image"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}

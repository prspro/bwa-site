import React from "react";
import Navigation from "../Navigation/Navigation";
import Burger from "../_misc/Burger/Burger";
import "./header.css";
import classNames from "classnames";
import useHeader from "./useHeader";
import LanguageSwitcher from "../_misc/LanguageSwitcher/LanguageSwitcher";

export default function Header() {
  const {
    logoPath,
    isMobileMenuShown,
  } = useHeader();
  return (
    <header className="header pt-x-lrg pb-x-lrg">
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
        </div>
      </div>
    </header>
  );
}

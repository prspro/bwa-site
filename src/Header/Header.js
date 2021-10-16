import React from "react";
import Navigation from "../Navigation/Navigation";
import logo from "../img/svg/logo.svg";
import "./header.css";

export default function Header() {
  return (
    <header className="header pt-x-lrg pb-xxx-lrg">
      <div className="container">
        <div className="row">
          <div className="header__bar">
            <a href="#">
              <img src={logo} loading="lazy" alt="logo" />
            </a>
            <div className="header__navigation">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

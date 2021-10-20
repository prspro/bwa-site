import React from "react";
import "./navigation.css";

export default function Navigation() {
  return (
    <ul className="navigation navigation--header">
      {["home", "gallery", "products", "review", "support"].map((item) => (
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__text">{item}</span>
            <span></span>
          </a>
        </li>
      ))}

      {/* <li className="navigation__item">
        <a href="#" className="navigation__link">
          <span className="navigation__text">gallery</span>
        </a>
      </li>
      <li className="navigation__item">
        <a href="#" className="navigation__link">
          <span className="navigation__text">products</span>
        </a>
      </li>
      <li className="navigation__item">
        <a href="#" className="navigation__link">
          <span className="navigation__text">review</span>
        </a>
      </li>
      <li className="navigation__item">
        <a href="#" className="navigation__link">
          <span className="navigation__text">support</span>
        </a>
      </li> */}
    </ul>
  );
}

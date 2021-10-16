import React from "react";
import "./navigation.css";

export default function Navigation() {
  return (
    <ul className="navigation navigation--header">
      <li className="navigation__item">
        <a href="#" className="navigation__link">
          <span className="navigation__text">home</span>
        </a>
      </li>
      <li className="navigation__item">
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
      </li>
    </ul>
  );
}

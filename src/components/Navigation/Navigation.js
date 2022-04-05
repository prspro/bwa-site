import React from "react";
import "./navigation.css";
import useNavigationComponent from "./useNavigationComponent";

import { Link } from "react-router-dom";

export default function Navigation() {
  const { navigationListTranslated, handlelinkClick } = useNavigationComponent();

  return (
    <ul className="navigation navigation--header">
      {navigationListTranslated.map((item, idx) => (
        <li key={idx} className="navigation__item">
          <Link to={item.link} className="navigation__link" onClick={handlelinkClick}>
            <span className="navigation__text">{item.anchor}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import React from "react";
import "./navigation.css";
import useNavigationComponent from "./useNavigationComponent";

export default function Navigation() {
  const { navigationListTranslated } = useNavigationComponent();

  return (
    <ul className="navigation navigation--header">
      {navigationListTranslated.map((item, idx) => (
        <li key={idx} className="navigation__item">
          <a href={item.link} className="navigation__link">
            <span className="navigation__text">{item.anchor}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

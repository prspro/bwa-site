import React from "react";
import "./navigation.css";
import { navigationList } from "../../data/initialData";

export default function Navigation() {
  return (
    <ul className="navigation navigation--header">
      {navigationList.map((item) => (
        <li className="navigation__item">
          <a href={item.link} className="navigation__link">
            <span className="navigation__text">{item.anchor}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

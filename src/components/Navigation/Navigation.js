import React from "react";
import "./navigation.css";

export default function Navigation() {
  const navigationList = [
    {
      anchor: "home",
      link: ".",
    },
    {
      anchor: "gallery",
      link: ".",
    },
    {
      anchor: "products",
      link: ".",
    },
    {
      anchor: "review",
      link: ".",
    },
    {
      anchor: "support",
      link: ".",
    },
  ];
  return (
    <ul className="navigation navigation--header">
      {navigationList.map((item) => (
        <li className="navigation__item">
          <a href={item.link} className="navigation__link">
            <span className="navigation__text">{item.anchor}</span>
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

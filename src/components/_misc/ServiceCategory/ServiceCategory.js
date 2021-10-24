import React from "react";
import "./servicecategory.css";

export default function ServiceCategory({ data }) {
  const dataLinksPrepared = data.linksList.map((entry) => {
    if (entry.href.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i)) {
      return {
        ...entry,
        href: entry.href.replace(
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
          "tel:$&"
        ),
      };
    }
    if (entry.href.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      return {
        ...entry,
        href: entry.href.replace(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          "mailto:$&"
        ),
      };
    }
    return entry;
  });

  console.log(dataLinksPrepared);

  return (
    <div className="service-category">
      <p className="service-category__title">{data.categoryTitle}</p>
      <ul className="service-category__list">
        {dataLinksPrepared.map((entry, idx) => {
          if (entry.href !== "") {
            return (
              <li key={idx} className="service-category__item">
                <a href={entry.href} className="service-category__link">
                  {entry.anchor}
                </a>
              </li>
            );
          } else {
            return (
              <li key={idx} className="service-category__item">
                {entry.anchor}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

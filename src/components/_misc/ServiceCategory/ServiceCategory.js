import React from "react";
import "./servicecategory.css";
import useServiceCategory from "./useServiceCategory";

export default function ServiceCategory({ data }) {
  const { dataLinksPrepared } = useServiceCategory(data);

  return (
    <div className="service-category">
      <p className="service-category__title">
        {data.translatablePart.categoryTitle}
      </p>
      <ul className="service-category__list">
        {dataLinksPrepared.map((entry, idx) => {
          if (entry.href !== "") {
            return (
              <li key={idx} className="service-category__item">
                <a href={entry.href} className="service-category__link">
                  {entry.translatablePart.anchor}
                </a>
              </li>
            );
          } else {
            return (
              <li key={idx} className="service-category__item">
                {entry.translatablePart.anchor}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

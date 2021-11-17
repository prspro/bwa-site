import React from "react";
import "./languageswitcher.css";
import useLanguageSwitcher from "./useLanguageSwitcher";
import classNames from "classnames";

export default function LanguageSwitcher() {
  const { handleLangSwitcherClick, handleListToggler, langList, listShown } =
    useLanguageSwitcher();

  return (
    <div className="language-switcher">
      <button
        onClick={() => handleListToggler()}
        className="language-switcher__btn"
      >
        {langList.find((entry) => entry.isActive).lang}
      </button>
      <ul
        className={classNames("language-switcher__list", { shown: listShown })}
      >
        {langList
          .filter((entry) => {
            return !entry.isActive;
          })
          .map((entry, idx) => {
            return (
              <li className="language-switcher__item" key={idx}>
                <button
                  className="language-switcher__btn"
                  onClick={() => handleLangSwitcherClick(entry.lang)}
                >
                  {entry.lang}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

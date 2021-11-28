import React from "react";
import "./languageswitcher.css";
import useLanguageSwitcher from "./useLanguageSwitcher";
import classNames from "classnames";

export default function LanguageSwitcher({ additionalClass }) {
  const { handleLangSwitcherClick, handleListToggler, langList, listShown } =
    useLanguageSwitcher();

  return (
    <div className={classNames("language-switcher", additionalClass)}>
      <button
        onClick={() => handleListToggler()}
        className="language-switcher__btn language-switcher__btn--indicate on-dt"
      >
        {langList.find((entry) => entry.isActive).lang}
      </button>
      <ul
        className={classNames("on-dt language-switcher__list", {
          shown: listShown,
        })}
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
      <ul className={"language-switcher__list language-switcher__list--full"}>
        {langList.map((entry, idx) => {
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

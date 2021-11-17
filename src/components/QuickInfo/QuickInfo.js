import React from "react";
import "./quickinfo.css";
import Image from "../_misc/Image/Image";
import useQuickInfo from "./useQuickInfo";
import parse from "html-react-parser";

export default function QuickInfo() {
  const { quickInfoTranslated, picSrc, picAlt } = useQuickInfo();
  return (
    <section className="quick-info pt-xx-lrg pb-xx-lrg">
      <div className="container">
        <div className="row">
          <div className="quick-info__wrap">
            <Image
              src={picSrc}
              alt={picAlt}
              pictureClass={"quick-info__col quick-info__col--pic-wrap"}
            />
            <div className="quick-info__col quick-info__col--text-wrap">
              <div className="quick-info__text-wrap">
                <h3>{parse(quickInfoTranslated.translatablePart.title)}</h3>
                {parse(quickInfoTranslated.translatablePart.description)}
              </div>
              <ul className="quick-info__list">
                {quickInfoTranslated.list.map((entry, idx) => {
                  return (
                    <li key={idx} className="quick-info__item">
                      <span className="quick-info__item-title">
                        {entry.translatablePart.value}
                      </span>
                      <p className="quick-info__item-description">
                        {entry.translatablePart.shortDescription}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

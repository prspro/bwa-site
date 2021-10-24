import React from "react";
import "./quickinfo.css";
import Image from "../_misc/Image/Image";
import { quickInfo } from "../../data/initialData";

export default function QuickInfo() {
  return (
    <section className="quick-info pt-xx-lrg pb-xx-lrg">
      <div className="container">
        <div className="row">
          <div className="quick-info__wrap">
            <Image
              src={"/img/content-pic-3.png"}
              alt={"alt"}
              pictureClass={"quick-info__col quick-info__col--pic-wrap"}
            />
            <div className="quick-info__col quick-info__col--text-wrap">
              <div className="quick-info__text-wrap">
                <h3>{quickInfo.title}</h3>
                {quickInfo.description}
              </div>
              <ul className="quick-info__list">
                {quickInfo.list.map((entry, idx) => {
                  return (
                    <li key={idx} className="quick-info__item">
                      <span className="quick-info__item-title">
                        {entry.value}
                      </span>
                      <p className="quick-info__item-description">
                        {entry.shortDescription}
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

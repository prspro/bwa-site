import React from "react";
import "./opinions.css";
import Comment from "../_misc/Comment/Comment";
import { opinionsInfo } from "../../data/initialData";

export default function Opinions() {
  return (
    <section className="opinions pt-x-lrg pb-x-lrg">
      <div className="container">
        <div className="row">
          <div className="opinions__wrap">
            <h2 className="opinions__title">{opinionsInfo.title}</h2>
            <ul className="opinions__list">
              {opinionsInfo.list.map((entry, idx) => {
                return (
                  <li key={idx} className="opinions__item">
                    <Comment props={entry} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

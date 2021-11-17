import React from "react";
import "./opinions.css";
import Comment from "../_misc/Comment/Comment";
import useOpinions from "./useOpinions";
import parse from "html-react-parser";

export default function Opinions() {
  const { opinionsDataTranslated } = useOpinions();
  return (
    <section className="opinions pt-x-lrg pb-x-lrg">
      <div className="container">
        <div className="row">
          <div className="opinions__wrap">
            <h2 className="opinions__title">
              {parse(opinionsDataTranslated.translatablePart.title)}
            </h2>
            <ul className="opinions__list">
              {opinionsDataTranslated.list.map((entry, idx) => {
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

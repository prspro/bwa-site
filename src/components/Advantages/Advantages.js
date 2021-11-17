import React from "react";
import "./advantages.css";
import AdvantageBanner from "../_misc/AdvantageBanner/AdvantageBanner";
import useAdvantages from "./useAdvantages";

export default function Advantages() {
  const { advantagesDataTranslated } = useAdvantages();
  return (
    <section className="advantages pt-lrg pb-lrg">
      <div className="container">
        <div className="row">
          <ul className="advantages__list">
            {advantagesDataTranslated.map((entry, idx) => {
              return (
                <li key={idx} className="advantages__item">
                  <AdvantageBanner
                    isLight={entry.isLight}
                    imageSrc={entry.imageSrc}
                    imageAlt={entry.imageAlt}
                    blockTitle={entry.translatablePart.title}
                    blockText={entry.translatablePart.text}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

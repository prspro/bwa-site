import React from "react";
import "./advantages.css";
import AdvantageBanner from "../_misc/AdvantageBanner/AdvantageBanner";
import { advantagesList } from "../../data/initialData";

export default function Advantages() {
  return (
    <section className="advantages pt-lrg pb-lrg">
      <div className="container">
        <div className="row">
          <ul className="advantages__list">
            {advantagesList.map((entry, idx) => {
              return (
                <li key={idx} className="advantages__item">
                  <AdvantageBanner
                    isLight={entry.isLight}
                    imageSrc={entry.imageSrc}
                    imageAlt={entry.imageAlt}
                    blockTitle={entry.blockTitle}
                    blockText={entry.blockText}
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

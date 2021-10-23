import React from "react";
import "./advantages.css";
import AdvantageBanner from "../_misc/AdvantageBanner/AdvantageBanner";

export default function Advantages() {
  const advantagesList = [
    {
      isLight: false,
      imageSrc: "/img/content-pic-1.png",
      imageAlt: "alt",
      blockTitle: "ultra light",
      blockText: (
        <p>
          Drone move faster with weighing component <b>under 200 g</b>
        </p>
      ),
    },
    {
      isLight: true,
      imageSrc: "/img/content-pic-2.png",
      imageAlt: "alt",
      blockTitle: "best resolution",
      blockText: (
        <p>
          Take a beautiful view with best camera up to{" "}
          <b>4K Camera Resolution</b>
        </p>
      ),
    },
  ];

  return (
    <section className="advantages">
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

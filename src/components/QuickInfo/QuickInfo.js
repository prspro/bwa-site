import React from "react";
import "./quickinfo.css";
import Image from "../_misc/Image/Image";

export default function QuickInfo() {
  const quickInfo = {
    title: "Why Drone Light?",
    description: (
      <p>
        We provide a best self drone easy to use and operate. With auto pilot,
        the device will take a beautiful view for the best of flying operation.
      </p>
    ),
    list: [
      { value: "4K", shortDescription: "Camera Resolution" },
      { value: "2 TB", shortDescription: "Storage Capacity" },
      { value: "60 m/s", shortDescription: "Super Max Speed" },
      { value: "30 mins", shortDescription: "Long Flight Time" },
    ],
  };
  return (
    <section className="quick-info">
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

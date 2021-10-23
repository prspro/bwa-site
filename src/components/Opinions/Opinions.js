import React from "react";
import "./opinions.css";
import Comment from "../_misc/Comment/Comment";

export default function Opinions() {
  const opinionsInfo = {
    title: "What Our “Pilots Are Saying",
    list: [
      {
        shortDescription: (
          <p>
            {" "}
            With high resolution camera, picture become clear and beautiful.
            It’s so easy to operate drone.
          </p>
        ),
        authorName: "Hugo Adams",
        authorRole: "Content Creator",
        authorIconSrc: "/img/profile-pic1.jpg",
      },
      {
        shortDescription: (
          <p>
            Taking high view video become easy and faster. Battery performance
            really helping for making film.
          </p>
        ),
        authorName: "Jennie Obrien",
        authorRole: "Director Film",
        authorIconSrc: "/img/profile-pic2.jpg",
      },
      {
        shortDescription: (
          <p>
            Making video content for my trip vlog so powerful and wonderful.
            Love the video quality.
          </p>
        ),
        authorName: "Lisa Millz",
        authorRole: "Content WQCreator",
        authorIconSrc: "/img/profile-pic3.jpg",
      },
    ],
  };
  return (
    <section className="opinions">
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

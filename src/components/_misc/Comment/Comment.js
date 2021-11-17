import React from "react";
import "./comment.css";
import Image from "../Image/Image";
import parse from "html-react-parser";

export default function Comment({ props }) {
  const { authorIconSrc, translatablePart } = props;
  return (
    <div className="comment">
      <div className="comment__text-wrap">
        {parse(translatablePart.shortDescription)}
      </div>
      <div className="comment__info-wrap">
        <Image
          src={authorIconSrc}
          alt={translatablePart.authorName}
          pictureClass={"comment__col comment__col--icon"}
        />
        <div className="comment__col comment__col--text">
          <p className="comment__author-name">{translatablePart.authorName}</p>
          <p className="comment__author-role">{translatablePart.authorRole}</p>
        </div>
      </div>
    </div>
  );
}

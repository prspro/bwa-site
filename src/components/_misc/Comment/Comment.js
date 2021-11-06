import React from "react";
import "./comment.css";
import Image from "../Image/Image";

export default function Comment({ props }) {
  const { shortDescription, authorName, authorRole, authorIconSrc } = props;
  return (
    <div className="comment">
      <div className="comment__text-wrap">{shortDescription}</div>
      <div className="comment__info-wrap">
        <Image
          src={authorIconSrc}
          alt={authorName}
          pictureClass={"comment__col comment__col--icon"}
        />
        <div className="comment__col comment__col--text">
          <p className="comment__author-name">{authorName}</p>
          <p className="comment__author-role">{authorRole}</p>
        </div>
      </div>
    </div>
  );
}

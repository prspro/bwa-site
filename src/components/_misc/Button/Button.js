import React from "react";
import "./button.css";

import classNames from "classnames";

export default function Button({ slug, buttonClass }) {
  const buttonClassList = classNames("btn", buttonClass);
  return (
    <a href={slug} className={buttonClassList}>
      get now
    </a>
  );
}

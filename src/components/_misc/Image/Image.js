import React from "react";
// import classNames from "classnames";

export default function Image({ src, alt, pictureClass }) {
  // const pictureClassList = classNames(classList);
  const pictureExt = src.split(".").at(-1);
  const getPictureType = (ext) => {
    switch (ext) {
      case "jpg":
        return "jpeg";
      case "jpeg":
        return "jpeg";
      case "png":
        return "png";
      default:
        return "png";
    }
  };
  const srcType = getPictureType(pictureExt);
  const srcWebp = src.replace("." + pictureExt, ".webp");

  if (pictureExt !== "svg") {
    return (
      <picture>
        <source srcSet={srcWebp} type="image/webp" />
        <source srcSet={src} type={"image/" + srcType} />
        <img className={pictureClass} loading="lazy" src={src} alt={alt} />
      </picture>
    );
  } else {
    return <img className={pictureClass} loading="lazy" src={src} alt={alt} />;
  }
}

import React from "react";
import useImage from "./useImage";

export default function Image({ src, alt, pictureClass }) {
  const { isSvg, srcType, srcWebp } = useImage(src);

  if (!isSvg) {
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

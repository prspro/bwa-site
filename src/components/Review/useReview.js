import { useEffect, useRef } from "react";

export default function useReview() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (
      mainRef.current &&
      thumbsRef.current &&
      infoRef.current &&
      thumbsRef.current.splide &&
      infoRef.current.splide
    ) {
      mainRef.current.sync(thumbsRef.current.splide);
      mainRef.current.sync(infoRef.current.splide);
    }
  }, []);

  const mainOptions = {
    type: "fade",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: false,
    // height: "10rem",
    drag: false,
  };

  const thumbsOptions = {
    type: "loop",
    perPage: 4,
    perMove: 1,
    rewind: true,
    gap: "15px",
    pagination: false,
    // fixedWidth: 110,
    // fixedHeight: 70,
    cover: true,
    // focus: "center",
    isNavigation: true,
    arrows: false,
  };

  const infoOptions = {
    type: "fade",
    perPage: 1,
    perMove: 1,
    rewind: true,
    gap: "1rem",
    pagination: false,
    arrows: false,
    // fixedWidth: 110,
    // fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
    drag: false,
  };

  return {
    mainRef,
    thumbsRef,
    infoRef,
    mainOptions,
    thumbsOptions,
    infoOptions,
  };
}

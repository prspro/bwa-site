import "./review.css";

import { useRef, useEffect } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Review() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const mainOptions = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "10rem",
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    gap: "1rem",
    pagination: false,
    fixedWidth: 110,
    fixedHeight: 70,
    cover: true,
    focus: "center",
    isNavigation: true,
  };

  return (
    <section className="review pt-xx-lrg pb-xx-lrg">
      <div className="container">
        <div className="row">
          <div className="review__carousel-wrap">
            <Splide options={mainOptions} ref={mainRef}>
              <SplideSlide>lorem1</SplideSlide>
              <SplideSlide>lorem2</SplideSlide>
              <SplideSlide>lorem3</SplideSlide>
            </Splide>

            <Splide options={thumbsOptions} ref={thumbsRef}>
              <SplideSlide>lorem1</SplideSlide>
              <SplideSlide>lorem2</SplideSlide>
              <SplideSlide>lorem3</SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

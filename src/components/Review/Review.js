import "./review.css";
import Image from "../_misc/Image/Image";
import Button from "../_misc/Button/Button";
import useReview from "./useReview";
import parse from "html-react-parser";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Review() {
  const {
    mainRef,
    thumbsRef,
    infoRef,
    descriptionRef,
    mainOptions,
    thumbsOptions,
    infoOptions,
    descriptionOptions,
    productsDataTranslated,
  } = useReview();

  return (
    <section className="review pt-xx-lrg pb-xx-lrg">
      <div className="container">
        <div className="row">
          <div className="review__inner-wrap">
            <div className="review__picture-col">
              <div className="review__big-picture-wrap">
                <Splide options={mainOptions} ref={mainRef}>
                  {productsDataTranslated.list.map((slide, idx) => {
                    return (
                      <SplideSlide key={idx}>
                        <Image
                          src={slide.picSrc}
                          alt={slide.translatablePart.picAlt}
                          pictureClass="review__big-picture"
                        />
                      </SplideSlide>
                    );
                  })}
                </Splide>
              </div>
              <div className="review__thumb-wrap">
                <Splide options={thumbsOptions} ref={thumbsRef}>
                  {productsDataTranslated.list.map((slide, idx) => {
                    return (
                      <SplideSlide key={idx}>
                        <div className="review__thumb-picture-wrap">
                          <Image
                            src={slide.picSrc}
                            alt={slide.translatablePart.picAlt}
                            pictureClass="review__thumb-picture"
                          />
                        </div>
                      </SplideSlide>
                    );
                  })}
                </Splide>
              </div>
            </div>
            <div className="review__info-col">
              <Splide options={infoOptions} ref={infoRef}>
                {productsDataTranslated.list.map((slide, idx) => {
                  return (
                    <SplideSlide key={idx}>
                      <h2 className="review__info-title">
                        {slide.translatablePart.title}
                      </h2>
                      <p className="review__info-description">
                        {slide.translatablePart.superShortDescription}
                      </p>
                      <p className="review__info-price">
                        {slide.translatablePart.price}
                      </p>
                      <p className="review__features-title">
                        {productsDataTranslated.translatablePart.features}:
                      </p>
                      <ul className="review__features-list">
                        {slide.translatablePart.camera !== "" && (
                          <li className="review__features-item">
                            <Image
                              src={"/img/svg/photo.svg"}
                              alt={""}
                              pictureClass=""
                            />
                            <p>{slide.translatablePart.camera}</p>
                          </li>
                        )}

                        {slide.translatablePart.memory !== "" && (
                          <li className="review__features-item">
                            <Image
                              src={"/img/svg/floppy.svg"}
                              alt={""}
                              pictureClass=""
                            />
                            <p>{slide.translatablePart.memory}</p>
                          </li>
                        )}

                        {slide.translatablePart.speed !== "" && (
                          <li className="review__features-item">
                            <Image
                              src={"/img/svg/timer.svg"}
                              alt={""}
                              pictureClass=""
                            />
                            <p>{slide.translatablePart.speed}</p>
                          </li>
                        )}

                        {slide.translatablePart.battery !== "" && (
                          <li className="review__features-item">
                            <Image
                              src={"/img/svg/battery.svg"}
                              alt={""}
                              pictureClass=""
                            />
                            <p>{slide.translatablePart.battery}</p>
                          </li>
                        )}
                      </ul>
                      <Button
                        slug="."
                        buttonClass="btn--blue review__features-btn"
                      />
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
            <div className="review__description-row">
              <Splide options={descriptionOptions} ref={descriptionRef}>
                {productsDataTranslated.list.map((slide, idx) => {
                  return (
                    <SplideSlide key={idx}>
                      <div className="review__description-card">
                        <h2>{productsDataTranslated.translatablePart.descriptionTitle}</h2>
                        {parse(slide.translatablePart.description)}
                      </div>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

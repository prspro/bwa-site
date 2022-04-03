import "./review.css";
import Image from "../_misc/Image/Image";
import Button from "../_misc/Button/Button";
import useReview from "./useReview";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Review() {
  const {
    mainRef,
    thumbsRef,
    infoRef,
    mainOptions,
    thumbsOptions,
    infoOptions,
  } = useReview();

  return (
    <section className="review pt-xx-lrg pb-xx-lrg">
      <div className="container">
        <div className="row">
          <div className="review__inner-wrap">
            <div className="review__picture-col">
              <div className="review__big-picture-wrap">
                <Splide options={mainOptions} ref={mainRef}>
                  <SplideSlide>
                    <Image
                      src="/img/drone-pic-1.jpg"
                      alt=""
                      pictureClass="review__big-picture"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Image
                      src="/img/drone-pic-1.jpg"
                      alt=""
                      pictureClass="review__big-picture"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Image
                      src="/img/drone-pic-1.jpg"
                      alt=""
                      pictureClass="review__big-picture"
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Image
                      src="/img/drone-pic-1.jpg"
                      alt=""
                      pictureClass="review__big-picture"
                    />
                  </SplideSlide>
                </Splide>
              </div>
              <div className="review__thumb-wrap">
                <Splide options={thumbsOptions} ref={thumbsRef}>
                  <SplideSlide>
                    <div className="review__thumb-picture-wrap">
                      <Image
                        src="/img/drone-pic-1.jpg"
                        alt=""
                        pictureClass="review__thumb-picture"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="review__thumb-picture-wrap">
                      <Image
                        src="/img/drone-pic-1.jpg"
                        alt=""
                        pictureClass="review__thumb-picture"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="review__thumb-picture-wrap">
                      <Image
                        src="/img/drone-pic-1.jpg"
                        alt=""
                        pictureClass="review__thumb-picture"
                      />
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="review__thumb-picture-wrap">
                      <Image
                        src="/img/drone-pic-1.jpg"
                        alt=""
                        pictureClass="review__thumb-picture"
                      />
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
            <div className="review__info-col">
              <Splide options={infoOptions} ref={infoRef}>
                <SplideSlide>
                  <h2 className="review__info-title">Drone Light</h2>
                  <p className="review__info-description">
                    Super fast, easy control drone
                  </p>
                  <p className="review__info-price">$ 4.500,00</p>
                  <p className="review__features-title">Drone features:</p>
                  <ul className="review__features-list">
                    <li className="review__features-item">
                      <Image
                        src={"/img/svg/photo.svg"}
                        alt={""}
                        pictureClass=""
                      />
                      <p>4K Camera Resolution</p>
                    </li>
                    <li className="review__features-item">
                      <Image
                        src={"/img/svg/floppy.svg"}
                        alt={""}
                        pictureClass=""
                      />
                      <p>4K Camera Resolution</p>
                    </li>
                    <li className="review__features-item">
                      <Image
                        src={"/img/svg/timer.svg"}
                        alt={""}
                        pictureClass=""
                      />
                      <p>4K Camera Resolution</p>
                    </li>
                    <li className="review__features-item">
                    <Image
                        src={"/img/svg/battery.svg"}
                        alt={""}
                        pictureClass=""
                      />
                      <p>4K Camera Resolution</p>
                    </li>
                  </ul>
                  <Button slug="." buttonClass="btn--blue review__features-btn" />
                </SplideSlide>
                <SplideSlide>
                  <h2 className="review__info-title">Drone Light</h2>
                  <p className="review__info-description">
                    Super fast, easy control drone
                  </p>
                  <p className="review__info-price">$ 4.500,00</p>
                  <p className="review__features-title">Drone features:</p>
                  <ul className="review__features-list">
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                  </ul>
                  <Button slug="." buttonClass="btn--blue" />
                </SplideSlide>
                <SplideSlide>
                  <h2 className="review__info-title">Drone Light</h2>
                  <p className="review__info-description">
                    Super fast, easy control drone
                  </p>
                  <p className="review__info-price">$ 4.500,00</p>
                  <p className="review__features-title">Drone features:</p>
                  <ul className="review__features-list">
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                  </ul>
                  <Button slug="." buttonClass="btn--blue" />
                </SplideSlide>
                <SplideSlide>
                  <h2 className="review__info-title">Drone Light</h2>
                  <p className="review__info-description">
                    Super fast, easy control drone
                  </p>
                  <p className="review__info-price">$ 4.500,00</p>
                  <p className="review__features-title">Drone features:</p>
                  <ul className="review__features-list">
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                    <li className="review__features-item">
                      4K Camera Resolution
                    </li>
                  </ul>
                  <Button slug="." buttonClass="btn--blue" />
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

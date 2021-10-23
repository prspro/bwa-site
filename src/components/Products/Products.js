import React from "react";
import "./products.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ProductCard from "../_misc/ProductCard/ProductCard";

export default function Products() {
  const productsInfo = {
    title: "New Products",
    description: (
      <p>
        New innovation, best quality than before. Make every moment flying
        operation become unforgettable.
      </p>
    ),
    list: [
      {
        pic: { src: "/img/drone-pic-1.jpg", alt: "alt" },
        title: "Mini Drone",
        shortDescription: (
          <p>
            Powerful camera drone at an affordable price range. Camera up to 4K
            resolution, optimize shots automatically.
          </p>
        ),
      },
      {
        pic: { src: "/img/drone-pic-2.jpg", alt: "alt" },
        title: "Drone Light",
        shortDescription: (
          <p>
            Drone light is every creators dream. Setting aperture manually and
            high battery performance. Drone light is everything you need.
          </p>
        ),
      },
      {
        pic: { src: "/img/drone-pic-1.jpg", alt: "alt" },
        title: "Phantom",
        shortDescription: (
          <p>
            Inspired by phantom, drone can move faster and quickly like a ghost.
            Focus on speed so you can investigate environment quickly.
          </p>
        ),
      },
      {
        pic: { src: "/img/drone-pic-2.jpg", alt: "alt" },
        title: "Drone Light",
        shortDescription: (
          <p>
            Drone light is every creators dream. Setting aperture manually and
            high battery performance. Drone light is everything you need.
          </p>
        ),
      },
    ],
  };
  return (
    <section className="products">
      <div className="container-fluid">
        <div className="row">
          <div className="products__wrap">
            <div className="products__text-wrap">
              <h4 className="products__title">{productsInfo.title}</h4>
              {productsInfo.description}
            </div>
            <Splide
              options={{
                // destroy: true,
                arrows: false,
                pagination: false,
                fixedWidth: "500px",
                gap: "50px",
                //
                trimSpace: false,
                focus: "center",
                // perPage: 3,
                // perMove: 2,
                // flickMaxPages: 1,
              }}
            >
              {productsInfo.list.map((entry, idx) => {
                return (
                  <SplideSlide key={idx}>
                    <ProductCard props={entry} />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

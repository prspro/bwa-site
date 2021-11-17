import React from "react";
import "./products.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ProductCard from "../_misc/ProductCard/ProductCard";
import useProducts from "./useProducts";
import parse from "html-react-parser";

export default function Products() {
  const { productsDataTranslated } = useProducts();

  return (
    <section className="products pt-x-lrg pb-x-lrg">
      <div className="container-fluid">
        <div className="row">
          <div className="products__wrap">
            <div className="products__text-wrap">
              <h4 className="products__title">
                {parse(productsDataTranslated.translatablePart.title)}
              </h4>
              {parse(productsDataTranslated.translatablePart.description)}
            </div>
            <Splide
              options={{
                arrows: false,
                pagination: false,
                fixedWidth: "500px",
                gap: "50px",
                perPage: 2,
                perMove: 2,
                breakpoints: {
                  991: {
                    fixedWidth: "450px",
                    gap: "20px",
                  },
                  767: {
                    destroy: true,
                  },
                },
              }}
            >
              {productsDataTranslated.list.map((entry, idx) => {
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

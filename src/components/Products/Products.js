import React from "react";
import "./products.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ProductCard from "../_misc/ProductCard/ProductCard";
import { productsInfo } from "../../data/initialData";

export default function Products() {
  return (
    <section className="products pt-x-lrg pb-x-lrg">
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
                // trimSpace: false,
                // focus: "center",
                perPage: 2,
                perMove: 2,
                breakpoints: {
                  991: {
                    fixedWidth: "450px",
                    gap: "20px",
                  },
                },
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

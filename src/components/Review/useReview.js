import { useEffect, useRef } from "react";
import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useReview() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const infoRef = useRef(null);
  const descriptionRef = useRef(null);

  const { translatedData } = useTranslation();

  useEffect(() => {
    if (
      mainRef.current &&
      thumbsRef.current &&
      infoRef.current &&
      descriptionRef.current &&
      thumbsRef.current.splide &&
      infoRef.current.splide &&
      descriptionRef.current.splide
    ) {
      mainRef.current.sync(thumbsRef.current.splide);
      mainRef.current.sync(infoRef.current.splide);
      mainRef.current.sync(descriptionRef.current.splide);
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

  const descriptionOptions = {
    type: "fade",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: false,
    // height: "10rem",
    drag: false,
  };

  const productsDataTranslated = {
    ...data.productsInfo,
    translatablePart: translatedData.productsInfo.text,
    list: data.productsInfo.list.map((entry) => {
      return {
        ...entry,
        translatablePart: translatedData.productsInfo.list.find(
          (item) => item.key === entry.translatablePart
        ),
      };
    }),
  };

  return {
    mainRef,
    thumbsRef,
    infoRef,
    descriptionRef,
    mainOptions,
    thumbsOptions,
    infoOptions,
    descriptionOptions,
    productsDataTranslated
  };
}

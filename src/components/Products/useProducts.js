import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useProducts() {
  const { translatedData } = useTranslation();

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
    productsDataTranslated,
  };
}

import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useOpinions() {
  const { translatedData } = useTranslation();

  const opinionsDataTranslated = {
    ...data.opinionsInfo,
    translatablePart: translatedData.opinionsInfo.text,
    list: data.opinionsInfo.list.map((entry) => {
      return {
        ...entry,
        translatablePart: translatedData.opinionsInfo.list.find(
          (item) => item.key === entry.translatablePart
        ),
      };
    }),
  };

  return {
    opinionsDataTranslated,
  };
}

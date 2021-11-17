import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useQuickInfo() {
  const picSrc = data.quickInfo.picSrc;
  const picAlt = data.quickInfo.picAlt;

  const { translatedData } = useTranslation();

  const quickInfoTranslated = {
    ...data.quickInfo,
    translatablePart: translatedData.quickInfo.text,
    list: data.quickInfo.list.map((entry) => {
      return {
        ...entry,
        translatablePart: translatedData.quickInfo.list.find(
          (item) => item.key === entry.translatablePart
        ),
      };
    }),
  };

  return { quickInfoTranslated, picSrc, picAlt };
}

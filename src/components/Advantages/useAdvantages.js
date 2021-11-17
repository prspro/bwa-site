import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useAdvantages() {
  const { translatedData } = useTranslation();
  const advantagesDataTranslated = data.advantages.map((entry) => {
    return {
      ...entry,
      translatablePart: translatedData.advantages.blockList.find(
        (item) => item.key === entry.translatablePart
      ),
    };
  });
  return { advantagesDataTranslated };
}

import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useHero() {
  const heroImagePath = data.header.heroImagePath;
  const heroImageAlt = data.header.heroImageAlt;

  const { translatedData } = useTranslation();

  const headerTranslatedData = {
    ...data.header,
    translatablePart: translatedData.header.text,
  };

  return {
    headerTranslatedData,
    heroImagePath,
    heroImageAlt,
  };
}
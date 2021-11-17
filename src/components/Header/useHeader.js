import { useSelector } from "react-redux";
import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useHeader() {
  const heroImagePath = data.header.heroImagePath;
  const heroImageAlt = data.header.heroImageAlt;
  const logoPath = data.header.logoPath;

  const isMobileMenuShown = useSelector(
    (state) => state.appMainLogic.isMobileMenuShown
  );

  const { translatedData } = useTranslation();

  const headerTranslatedData = {
    ...data.header,
    translatablePart: translatedData.header.text,
  };

  return {
    headerTranslatedData,
    heroImagePath,
    heroImageAlt,
    logoPath,
    isMobileMenuShown,
  };
}

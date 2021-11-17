import { useSelector } from "react-redux";
import translation from ".";

export default function useTranslation() {
  const { lang } = useSelector((state) => state.appMainLogic);
  const translatedData = translation[lang] || translation["en"];

  return { translatedData };
}

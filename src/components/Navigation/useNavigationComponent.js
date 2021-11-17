import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useNavigationComponent() {
  const { translatedData } = useTranslation();

  const navigationListTranslated = data.navigation.itemList.map((entry) => {
    return {
      ...entry,
      ...translatedData.navigation.itemList.find(
        (item) => item.key === entry.translatablePart
      ),
    };
  });

  return {
    navigationListTranslated,
  };
}

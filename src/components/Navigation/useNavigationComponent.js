import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

import { toggleMobileMenu, toggleOverlay } from "../../redux/appSlice";
import { useDispatch } from "react-redux";

export default function useNavigationComponent() {
  const { translatedData } = useTranslation();

  const dispatch = useDispatch();

  const handlelinkClick = () => {
    dispatch(toggleMobileMenu(""));
    dispatch(toggleOverlay(""));
    document.getElementsByTagName("BODY")[0].classList.toggle("scrollable");
  };

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
    handlelinkClick,
  };
}

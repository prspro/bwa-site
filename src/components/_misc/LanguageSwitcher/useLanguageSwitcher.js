import { useState } from "react";
import { setLanguage } from "../../../redux/appSlice";
import { useDispatch } from "react-redux";

const langListInit = [
  { lang: "en", isActive: true },
  { lang: "de", isActive: false },
];

export default function useLanguageSwitcher() {
  const [langList, setLangList] = useState(langListInit);
  const [listShown, setListShown] = useState(false);

  const dispatch = useDispatch();

  const handleListToggler = () => {
    setListShown((prev) => {
      return !prev;
    });
  };

  const handleLangSwitcherClick = (lang) => {
    dispatch(setLanguage(lang));
    setLangList((prev) => {
      return prev.map((entry) => {
        if (entry.lang === lang) {
          return {
            ...entry,
            isActive: true,
          };
        } else {
          return {
            ...entry,
            isActive: false,
          };
        }
      });
    });
  };

  return {
    handleLangSwitcherClick,
    handleListToggler,
    langList,
    listShown,
  };
}

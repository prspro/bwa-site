import { useSelector } from "react-redux";

export default function useTranslator(untranslatedData) {
  const makeTranslate = (obj1, localeKey) => {
    // console.log("translated", obj1);
    let obj = obj1;
    Object.keys(obj).forEach((key) => {
      if (
        typeof obj[key] === "object" &&
        obj[key] !== undefined &&
        obj[key] !== null
      ) {
        if (obj[key].hasOwnProperty(localeKey)) {
          obj[key] = obj[key][localeKey];
        } else {
          makeTranslate(obj[key], localeKey);
        }
      }
    });
    return obj;
  };

  const localeKey = useSelector((state) => state.appMainLogic.lang);
  const translatedData = makeTranslate(untranslatedData, localeKey);

  // console.log(translatedData);

  return {
    translatedData,
  };
}

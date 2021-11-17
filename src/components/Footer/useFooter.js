import { data } from "../../data/data";
import useTranslation from "../../data/translation/useTranslation";

export default function useFooter() {
  const { translatedData } = useTranslation();

  const footerDataTranslated = {
    ...data.footerInfo,
    translatablePart: translatedData.footerInfo.text,
    servicesList: data.footerInfo.servicesList.map((servicesListEntry) => {
      const servicesLisTranslation =
        translatedData.footerInfo.servicesList.find(
          (servicesListItem) =>
            servicesListEntry.translatablePart === servicesListItem.key
        );
      if (
        servicesLisTranslation.linksList === undefined ||
        servicesLisTranslation.linksList === null
      ) {
        return {
          ...servicesListEntry,
          translatablePart: {
            categoryTitle: servicesLisTranslation.categoryTitle,
          },
        };
      } else {
        return {
          ...servicesListEntry,
          translatablePart: {
            categoryTitle: servicesLisTranslation.categoryTitle,
          },
          linksList: servicesListEntry.linksList.map((linksListEntry) => {
            return {
              ...linksListEntry,
              translatablePart: servicesLisTranslation.linksList.find(
                (linksListItem) =>
                  linksListItem.key === linksListEntry.translatablePart
              ),
            };
          }),
        };
      }
    }),
  };

  return { footerDataTranslated };
}

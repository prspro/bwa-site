export default function useServiceCategory(data) {
  // console.log(data);

  const dataLinksPrepared = data.linksList.map((entry) => {
    if (entry.href.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i)) {
      return {
        ...entry,
        href: entry.href.replace(
          /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
          "tel:$&"
        ),
      };
    }
    if (entry.href.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
      return {
        ...entry,
        href: entry.href.replace(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          "mailto:$&"
        ),
      };
    }
    return entry;
  });

  return { dataLinksPrepared };
}

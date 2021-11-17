export default function useImage(src) {
  const pictureExt = src.split(".").at(-1);
  const getPictureType = (ext) => {
    switch (ext) {
      case "jpg":
        return "jpeg";
      case "jpeg":
        return "jpeg";
      case "png":
        return "png";
      default:
        return "png";
    }
  };

  const isSvg = pictureExt === "svg" ? true : false;
  const srcType = getPictureType(pictureExt);
  const srcWebp = src.replace("." + pictureExt, ".webp");

  return {
    isSvg,
    srcType,
    srcWebp,
  };
}

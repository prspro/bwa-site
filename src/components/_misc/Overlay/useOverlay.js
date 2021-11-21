import { useSelector, useDispatch } from "react-redux";
import { hideOverlay, hideMobileMenu } from "../../../redux/appSlice";

export default function useOverlay() {
  const dispatch = useDispatch();

  const handleOverlayClick = () => {
    dispatch(hideOverlay(""));
    dispatch(hideMobileMenu(""));
    document.getElementsByTagName("BODY")[0].classList.toggle("scrollable");
  };

  const isOverlayShown = useSelector(
    (state) => state.appMainLogic.isOverlayShown
  );

  return {
    handleOverlayClick,
    isOverlayShown,
  };
}

import { useSelector, useDispatch } from "react-redux";
import { hideOverlay, hideMobileMenu } from "../../../redux/appSlice";

export default function useOverlay() {
  const dispatch = useDispatch();

  const handleOverlayClick = () => {
    dispatch(hideOverlay(""));
    dispatch(hideMobileMenu(""));
  };

  const isOverlayShown = useSelector(
    (state) => state.appMainLogic.isOverlayShown
  );

  return {
    handleOverlayClick,
    isOverlayShown,
  };
}

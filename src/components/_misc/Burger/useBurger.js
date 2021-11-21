import { toggleMobileMenu, toggleOverlay } from "../../../redux/appSlice";
import { useDispatch } from "react-redux";

export default function useBurger() {
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(toggleMobileMenu(""));
    dispatch(toggleOverlay(""));
    document.getElementsByTagName("BODY")[0].classList.toggle("scrollable");
  };

  return { handleBurgerClick };
}

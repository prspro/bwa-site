import "./App.css";
import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import QuickInfo from "./components/QuickInfo/QuickInfo";
import Products from "./components/Products/Products";
import Opinions from "./components/Opinions/Opinions";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/_misc/Overlay/Overlay";

import { useEffect } from "react";
import { hideMobileMenu, hideOverlay } from "./redux/appSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const resizeHandler = function (ev) {
    document.getElementsByTagName("BODY")[0].classList.remove("scrollable");
    dispatch(hideMobileMenu(""));
    dispatch(hideOverlay(""));
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler, false);
    return () => {
      window.removeEventListener("resize", resizeHandler, false);
    };
  }, []);

  return (
    <div /*ref={ref}*/ className="App">
      <Header />
      <main>
        <Advantages />
        <QuickInfo />
        <Products />
        <Opinions />
      </main>
      <Footer />
      <Overlay />
    </div>
  );
}

export default App;

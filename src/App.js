import "./App.css";
import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import QuickInfo from "./components/QuickInfo/QuickInfo";
import Products from "./components/Products/Products";
import Opinions from "./components/Opinions/Opinions";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/_misc/Overlay/Overlay";

// import { useResizeDetector } from "react-resize-detector";

// import { hideMobileMenu } from "./dataStore/mobileMenuSlice";
// import { useDispatch } from "react-redux";

import { useCallback } from "react";

function App() {
  // const dispatch = useDispatch();

  // const hideMenu = () => {
  //   dispatch(hideMobileMenu(""));
  // };

  // const onResize = useCallback(() => {
  //   console.log("123123");
  //   hideMenu();
  // }, []);

  // const { width, height, ref } = useResizeDetector({
  //   handleHeight: false,
  //   refreshMode: "debounce",
  //   refreshRate: 100,
  //   onResize,
  // });

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

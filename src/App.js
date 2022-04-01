import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import QuickInfo from "./components/QuickInfo/QuickInfo";
import Products from "./components/Products/Products";
import Opinions from "./components/Opinions/Opinions";
import Footer from "./components/Footer/Footer";
import Overlay from "./components/_misc/Overlay/Overlay";
import Review from "./components/Review/Review";
import Hero from "./components/Hero/Hero";

//? Router
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <Hero />
                  <Advantages />
                  <QuickInfo />
                  <Products />
                  <Opinions />
                </React.Fragment>
              }
            />
            <Route path="/review" element={<Review />} />
          </Routes>
        </main>
        <Footer />
        <Overlay />
      </div>
    </BrowserRouter>
  );
}

export default App;

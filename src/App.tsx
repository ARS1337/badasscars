import React, { Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import SearchBarAndOtherComponents from "./Components/SearchBarAndOtherComponents";
import SecondPage from "./Components/SecondPage";
import StickyNotificationAtTop from "./Components/StickyNotificationAtTop";
import ThirdPage from "./Components/ThirdPage";
import "./styles/App.css";
import debounce from "./utils/debounce";
import ScrollContext from "./utils/ScrollContext";

function App() {
  const [currentCar, setcurrentCar] = useState(0);
  const [scrollPosition, setscrollPosition] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [bottomToTopAnimation, setbottomToTopAnimation] = useState("animate-bottomToTopMore");
  const [scaleInAnimation, setscaleInAnimation] = useState("animate-scaleIn");
  const [searchBarAnimation, setsearchBarAnimation] = useState("animate-bottomToTopMore");
  const [footerAnimation, setfooterAnimation] = useState("animate-bottomToTopFooter");
  const [currPage, setcurrPage] = useState("/");

  useEffect(() => {
    console.log("app rendered");
  }, []);


  useEffect(() => {
    console.log("app mounted");
    return () => console.log("app unmounting...");
  }, []);

  const headerClassList = "z-50 fixed w-full" + bottomToTopAnimation;
  return (
    <div
      className="font-roboto bg-CorrectGrey  h-screen"
      key="app"
      onScroll={() => {
        console.log("scrolled");
      }}
      onClick={() => {
        console.log("clicked");
      }}
    >
      <BrowserRouter>
        <div className="h-screen flex flex-col justify-between">
          <div className={headerClassList}>
            {/* <StickyNotificationAtTop bottomToTopAnimation={bottomToTopAnimation} /> */}
            {/* <div className="px-8 animate-bottomToTop">
              <Header scaleInAnimation={scaleInAnimation} setcurrPage={setcurrPage}/>
              <SearchBarAndOtherComponents
                bottomToTopAnimation={bottomToTopAnimation}
                searchBarAnimation={searchBarAnimation}
                setcurrPage={setcurrPage}
              />
            </div> */}
          </div>
          <div className="flex items-center justify-end overflow-hidden ">
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    currentCar={currentCar}
                    setcurrentCar={setcurrentCar}
                    searchBarAnimation={searchBarAnimation}
                    bottomToTopAnimation={bottomToTopAnimation}
                    scaleInAnimation={scaleInAnimation}
                  />
                }
              />
              <Route
                path="/SecondPage"
                element={
                  <SecondPage
                    searchBarAnimation={searchBarAnimation}
                    bottomToTopAnimation={bottomToTopAnimation}
                    scaleInAnimation={scaleInAnimation}
                    currentCar={currentCar}
                    paymentAnimation={footerAnimation}
                    carListingNoAnimation={footerAnimation}
                  />
                }
              />
              <Route
                path="/ThirdPage"
                element={
                  <ThirdPage
                    searchBarAnimation={searchBarAnimation}
                    bottomToTopAnimation={bottomToTopAnimation}
                    scaleInAnimation={scaleInAnimation}
                    currentCar={currentCar}
                    paymentAnimation={footerAnimation}
                    carListingNoAnimation={footerAnimation}
                  />
                }
              />
            </Routes>
          </div>
          {/* <Footer
            currentCar={currentCar}
            paymentAnimation={footerAnimation}
            carListingNoAnimation={footerAnimation}
          /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

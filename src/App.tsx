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
  //animation class lists
  let headerClassListScaleIn = "animate-scaleIn";
  let headerClassListScaleInReverse = " animate-[scaleIn_1s_ease-in-out_1_reverse]  ";
  let headerClassListScaleInFinished = "animate-scaleInFinished";

  let searchBarTopToBottom = " animate-[bottomToTopMoreMainPage_1s_ease-in-out_1_reverse] ";
  let searchBarBottomToTopMore = "animate-bottomToTopMore";
  let searchBarBottomToTopMoreFinished = "animate-bottomToTopMoreFinished";

  let stickyNotificationTopToBottom = " animate-[bottomToTopMoreMainPage_1s_ease-in-out_1_reverse] ";
  let stickyNotificationBottomToTopMore = "animate-bottomToTopMore";
  let stickyNotificationBottomToTopMoreFinished = "animate-bottomToTopMoreFinished";

  let collectiveHeaderBottomToTop = "animate-bottomToTop";
  let collectiveHeaderTopToBottom = "animate-[bottomToTop_1s_ease-in-out_1_reverse] ";
  let collectiveHeaderTopToBottomFinished = "animate-bottomToTopFinished";

  let footerBottomToTop = "animate-bottomToTopFooter";
  let footerTopToBottom = " animate-[bottomToTopFooter_1s_ease-in-out_1_reverse] ";
  let footerBottomToTopFinished = "animate-bottomToTopFooterFinished";

  let secondPageBottomToTop = "animate-secondPageBottomToTop";
  let secondPageTopToBottom = "animate-secondPageTopToBottom";

  const [headerClassList, setheaderClassList] = useState(headerClassListScaleInReverse);
  const [searchBarClassList, setsearchBarClassList] = useState(searchBarTopToBottom);
  const [stickyNotificationClassList, setstickyNotificationClassList] = useState(stickyNotificationTopToBottom);
  const [footerClassList, setfooterClassList] = useState(footerTopToBottom);
  const [collectiveHeaderClassList, setcollectiveHeaderClassList] = useState(collectiveHeaderTopToBottom);
  const [secondPageAnimationDirection, setsecondPageAnimationDirection] = useState(secondPageBottomToTop);

  const pageList = ["main-page", "second-page", "third-page"];
  let currPageNo = 0;

  const scrollToPage = (toPage: string) => {
    try {
      document.getElementsByClassName(toPage)[0].scrollIntoView();
    } catch (err) {
      console.log("err ", err);
    }
  };

  const handleScroll = debounce((e: any) => {
    let prevPageNo = currPageNo;
    //scrolling
    if (e.deltaY > 0 && currPageNo < 2) {
      currPageNo++;
    } else if (e.deltaY < 0 && currPageNo > 0) {
      currPageNo--;
    }
    let newPage = pageList[currPageNo];
    //adding animation
    if (currPageNo === 0) {
      setheaderClassList(headerClassListScaleInReverse);
      setsearchBarClassList(searchBarTopToBottom);
      setstickyNotificationClassList(stickyNotificationTopToBottom);
      setfooterClassList(footerTopToBottom);
      setcollectiveHeaderClassList(collectiveHeaderTopToBottom);
    } else if (currPageNo === 1) {
      if (prevPageNo === 2) {
        //transition from last page to middle
        setsearchBarClassList(searchBarBottomToTopMoreFinished);
        setheaderClassList(headerClassListScaleInFinished);
        setstickyNotificationClassList(stickyNotificationBottomToTopMoreFinished);
        setfooterClassList(footerBottomToTopFinished);
        setcollectiveHeaderClassList(collectiveHeaderTopToBottomFinished);
        setsecondPageAnimationDirection(secondPageTopToBottom);
      } else {
        //transition from first page to middle
        setsearchBarClassList(searchBarBottomToTopMore);
        setheaderClassList(headerClassListScaleIn);
        setstickyNotificationClassList(stickyNotificationBottomToTopMore);
        setfooterClassList(footerBottomToTop);
        setcollectiveHeaderClassList(collectiveHeaderBottomToTop);
        setsecondPageAnimationDirection(secondPageBottomToTop);
      }
    } else {
      //currPage no ===2
      setheaderClassList(headerClassListScaleInFinished);
      setsearchBarClassList(searchBarBottomToTopMoreFinished);
      setstickyNotificationClassList(stickyNotificationBottomToTopMoreFinished);
      setfooterClassList(footerBottomToTopFinished);
      setcollectiveHeaderClassList(collectiveHeaderTopToBottomFinished);
    }
    //trigger off load animation for curr page by setting setcurrpage then scroll to the new page
    setcurrPage(newPage);
    scrollToPage(newPage);
  }, 500);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    setcurrPage("main-page");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log("currpage", currPage);

  return (
    <div
      className="font-roboto bg-newGrey w-screen scroll-container"
      key={"app" + currPage}
      style={{ overflow: "hidden", scrollBehavior: "smooth" }}
    >
      {/* <div className="bg-CorrectGrey pt-[5vh]"> */}
        <div className="fixed top-0 w-screen h-[20vh] z-50">
          <div className={collectiveHeaderClassList}>
            <StickyNotificationAtTop bottomToTopAnimation={stickyNotificationClassList} />
            <div className="px-8 ">
              <Header scaleInAnimation={headerClassList} />
              <SearchBarAndOtherComponents searchBarAnimation={searchBarClassList} animateSecondHeader={true} />
            </div>
          </div>
        </div>
        {/* <img
          src="/assets/cityscape.jpg"
          height="100%"
          width="100%"
          alt="cityscape"
          className={"absolute z-0 pt-0 w-screen"}
          key={currentCar + 10}
        /> */}
      {/* </div> */}

      <div className={currPage.includes("main") ? " opacity-1" : "opacity-1"}>
        <MainPage currentCar={currentCar} setcurrentCar={setcurrentCar} />
      </div>
      <div className={currPage.includes("second") ? " opacity-1" : "opacity-0"}>
        <SecondPage animationDirection={secondPageAnimationDirection} />
      </div>
      <div className={currPage.includes("third") ? " opacity-1" : "opacity-1"}>
        <ThirdPage />
      </div>s
      <Footer currentCar={currentCar} paymentAnimation={footerClassList} carListingNoAnimation={footerClassList} />
    </div>
  );
}

export default App;

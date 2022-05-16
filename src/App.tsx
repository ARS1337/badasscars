import React, { Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import FifthPage from "./Components/FifthPage";
import Footer from "./Components/Footer";
import FourthPage from "./Components/FourthPage";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import SearchBarAndOtherComponents from "./Components/SearchBarAndOtherComponents";
import SecondPage from "./Components/SecondPage";
import SeventhPage from "./Components/SeventhPage";
import SixthPage from "./Components/SixthPage";
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

  const pageList = [
    "main-page",
    "second-page",
    "third-page",
    "fourth-page",
    "fifth-page",
    "sixth-page",
    "seventh-page",
  ];
  let currPageNo = 0;

  const scrollToPage = (toPage: string) => {
    try {
      document.getElementsByClassName(toPage)[0].scrollIntoView({ block: "center", inline: "center" });
    } catch (err) {
      console.log("err ", err);
    }
  };

  const handleScroll = debounce((e: any) => {
    let prevPageNo = currPageNo;
    //scrolling
    if (e.deltaY > 0 && currPageNo < pageList.length - 1) {
      currPageNo++;
    } else if (e.deltaY < 0 && currPageNo > 0) {
      currPageNo--;
    }
    if (prevPageNo == currPageNo) {
      return;
    }
    let newPage = pageList[currPageNo];
    //adding animation
    changeAnimation(prevPageNo, currPageNo);
    //trigger off load animation for curr page by setting setcurrpage then scroll to the new page
    setcurrPage(newPage);
    scrollToPage(newPage);
  }, 500);

  const changeAnimation = (prevPageNo: number, currPageNo: number) => {
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
        setsearchBarClassList(`animate-scaleIn md:${searchBarBottomToTopMore} lg:${searchBarBottomToTopMore}`);
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
  };

  var xDown: number = 0;
  var yDown: number = 0;

  function getTouches(evt: any) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  const handleTouchStart = debounce((evt: TouchEvent) => {
    evt.preventDefault();
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }, 500);

  const handleTouchMove = debounce((evt: TouchEvent) => {
    evt.preventDefault();
    let prevPageNo = currPageNo;
    //scrolling
    if (prevPageNo == currPageNo) {
      return;
    }

    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* right swipe */
      } else {
        /* left swipe */
      }
    } else {
      if (yDiff > 0 && currPageNo < pageList.length - 1) {
        /* down swipe */
        currPageNo++;
        console.log("down");
        alert("down");
      } else if (yDiff < 0 && currPageNo > 0) {
        /* up swipe */
        currPageNo--;
        console.log("up");
        alert("up");
      }
    }
    /* reset values */
    xDown = 0;
    yDown = 0;
    let newPage = pageList[currPageNo];
    //adding animation
    changeAnimation(prevPageNo, currPageNo);
    //trigger off load animation for curr page by setting setcurrpage then scroll to the new page
    setcurrPage(newPage);
    scrollToPage(newPage);
  }, 500);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
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
          <div className=" px-1 md:px-8 ">
            <Header scaleInAnimation={headerClassList} />
            <SearchBarAndOtherComponents searchBarAnimation={searchBarClassList} animateSecondHeader={false} />
          </div>
        </div>
      </div>

      <div className={currPage.includes("main") ? " opacity-1" : "opacity-1"}>
        <MainPage currentCar={currentCar} setcurrentCar={setcurrentCar} />
      </div>
      <div className={currPage.includes("second") ? " opacity-1" : "opacity-1"}>
        <SecondPage animationDirection={secondPageAnimationDirection} />
      </div>
      <div className={currPage.includes("third") ? " opacity-1" : "opacity-1"}>
        <ThirdPage />
      </div>
      <div className={currPage.includes("fourth") ? " opacity-1" : "opacity-1"}>
        <FourthPage />
      </div>
      <div className={currPage.includes("fifth") ? " opacity-1" : "opacity-1"}>
        <FifthPage />
      </div>
      <div className={currPage.includes("sixth") ? " opacity-1" : "opacity-1"}>
        <SixthPage />
      </div>
      <SeventhPage />
      <Footer currentCar={currentCar} paymentAnimation={footerClassList} carListingNoAnimation={footerClassList} />
    </div>
  );
}

export default App;

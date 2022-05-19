import React, { useEffect, useState } from "react";
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
import isVisible from "./utils/checkVisibility";
import animateValue from "./utils/animateValues";

function App() {
  const [currentCar, setcurrentCar] = useState(0);
  const [currPage, setcurrPage] = useState("/");
  //animation class lists
  let headerClassListScaleIn = "md:animate-scaleIn";
  let headerClassListScaleInReverse = " md:animate-[scaleIn_1s_ease-in-out_1_reverse]  ";
  let headerClassListScaleInFinished = "md:animate-scaleInFinished";

  let searchBarTopToBottom = " md:animate-[bottomToTopMoreMainPage_1s_ease-in-out_1_reverse] ";
  let searchBarBottomToTopMore = "md:animate-bottomToTopMore";
  let searchBarBottomToTopMoreFinished = "md:animate-bottomToTopMoreFinished";

  let stickyNotificationTopToBottom = " md:animate-[bottomToTopMoreMainPage_1s_ease-in-out_1_reverse] ";
  let stickyNotificationBottomToTopMore = "md:animate-bottomToTopMore";
  let stickyNotificationBottomToTopMoreFinished = "md:animate-bottomToTopMoreFinished";

  let collectiveHeaderBottomToTop = "md:animate-bottomToTop";
  let collectiveHeaderTopToBottom = "md:animate-[bottomToTop_1s_ease-in-out_1_reverse] ";
  let collectiveHeaderTopToBottomFinished = "md:animate-bottomToTopFinished";

  let footerBottomToTop = "md:animate-bottomToTopFooter";
  let footerTopToBottom = " md:animate-[bottomToTopFooter_1s_ease-in-out_1_reverse] ";
  let footerBottomToTopFinished = "md:animate-bottomToTopFooterFinished";

  let secondPageBottomToTop = "md:animate-secondPageBottomToTop";
  let secondPageTopToBottom = "md:animate-secondPageTopToBottom";

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
  let numberAnimation = () => {
    let secondPage = document.getElementsByClassName("second-page")[0];
    let fourthPage = document.getElementsByClassName("fourth-page")[0];
    let pageVisibleSecond = isVisible(secondPage);
    let pageVisibleFourth = isVisible(fourthPage);
    if (pageVisibleSecond || pageVisibleFourth) {
      animateValue(908, 999, 1000);
    }
  };
  const cityScapeList = ["animate-cityscape1", "animate-cityscape2", "animate-cityscape3", "animate-cityscape4"];
  let cityScapeCounter = 0;

  useEffect(() => {
    window.addEventListener("wheel", checkIfVisible);
  }, []);

  const checkIfVisible = (e) => {
    let secondPage = document.getElementsByClassName("second-page")[0];
    let mainPage = document.getElementsByClassName("main-page")[0];
    let notificationElem = document.getElementsByClassName("stickyNotification")[0];
    let searchBar = document.getElementsByClassName("searchBar")[0];
    let headerTitle = document.getElementsByClassName("headerTitle")[0];
    let footersm = document.getElementsByClassName("footersm")[0];
    let sixthPage = document.getElementsByClassName("sixth-page")[0];
    let fourthPage = document.getElementsByClassName("fourth-page")[0];
    let allHeaderElem = document.getElementsByClassName("allHeader")[0];

    let scrollDirection = "";
    if (e.deltaY > 0) {
      scrollDirection = "down";
    } else if (e.deltaY < 0) {
      scrollDirection = "up";
    }

    if (scrollDirection === "down") {
      let isMainPageVisible = isVisible(mainPage);
      if (isMainPageVisible) {
        if (mainPage) {
          let footerElem1 = document.getElementsByClassName("footer")[0];
          let footerElem2 = document.getElementsByClassName("footer")[1];
          footerElem1.style.animation = "bottomToTopFooter 1s linear 1 forwards";
          footerElem2.style.animation = "bottomToTopFooter 1s linear 1 forwards";
          notificationElem.style.animation = "bottomToTopFooter 0s  1 forwards";
          headerTitle.style.animation = "scaleIn 1s 1 forwards";
          searchBar.style.animation = "bottomToTopMore 1s linear  1 forwards";
          allHeaderElem.style.animation = "bottomToTop 1s linear  1 forwards";
        }
      }
      let isSixthPageVisible = isVisible(sixthPage);
      if (isSixthPageVisible) {
        footersm.style.animation = "bottomToTopFooter 0s  1 forwards";
      }
      let isSecondPageVisible = isVisible(secondPage);
      if (isSecondPageVisible) {
        numberAnimation();
      }
    } else if (scrollDirection === "up") {
      let pageVisible = isVisible(secondPage);
      if (pageVisible) {
        let footerElem1 = document.getElementsByClassName("footer")[0];
        let footerElem2 = document.getElementsByClassName("footer")[1];
        footerElem1.style.animation = "bottomToTopFooter 1s linear 1 reverse forwards";
        footerElem2.style.animation = "bottomToTopFooter 1s linear 1 reverse forwards";
        notificationElem.style.animation = "bottomToTopFooter 0s 1 reverse forwards";
        headerTitle.style.animation = "scaleIn 1s 1 reverse forwards";
        searchBar.style.animation = "bottomToTopMore 1s linear 1 reverse forwards";
        allHeaderElem.style.animation = "bottomToTop 1s linear 1 reverse forwards";
      }
      let isSixthPageVisible = isVisible(sixthPage);
      if (isSixthPageVisible) {
        footersm.style.animation = "bottomToTopFooter 0s reverse 1 forwards";
      }
      let isFourthPageVisible = isVisible(fourthPage);
      if (isFourthPageVisible) {
        numberAnimation();
      }
    }
  };

  return (
    <div
      className="font-roboto bg-newGrey w-screen snap-none overflow-hidden md:snap-y md:overflow-y-scroll  md:h-[100vh] md:snap-start md:snap-mandatory"
      key={"app" + currPage}
      id="slider"
    >
      <div className="md:fixed top-0 w-screen md:h-[15vh] z-50  md:bg-transparent allHeader">
        <div className={collectiveHeaderClassList}>
          <div className=" px-1 md:px-8 md:pt-8">
            <Header scaleInAnimation={headerClassList} />
            <SearchBarAndOtherComponents searchBarAnimation={searchBarClassList} animateSecondHeader={false} />
          </div>
        </div>
      </div>

      <section className={" z-50 snap-start notFooterDiv"}>
        <MainPage
          currentCar={currentCar}
          cityScapeList={cityScapeList}
          cityScapeCounter={cityScapeCounter}
          setcurrentCar={setcurrentCar}
        />
      </section>
      <section className={" snap-start"}>
        <SecondPage animationDirection={secondPageAnimationDirection} />
      </section>
      <section className={" snap-start"}>
        <ThirdPage />
      </section>
      <section className={" snap-start"}>
        <FourthPage />
      </section>
      <section className={" snap-start"}>
        <FifthPage />
      </section>
      <section className={" snap-start"}>
        <SixthPage />
      </section>
      <section className={" snap-start"}>
        <SeventhPage />
      </section>
      <div className="z-50 footerDiv">
        <Footer
          key={currPage}
          currentCar={currentCar}
          paymentAnimation={footerClassList}
          carListingNoAnimation={footerClassList}
        />
      </div>
    </div>
  );
}

export default App;

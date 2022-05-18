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

  // useEffect(() => {
  //   let footerElem = document.getElementsByClassName("footer")[0];
  //   if (footerElem) {
  //     footerElem.classList.remove("hidden");
  //     footerElem.classList.add("block");
  //   }
  // }, []);

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

  const cityScapeList = ["animate-cityscape1", "animate-cityscape2", "animate-cityscape3", "animate-cityscape4"];
  let cityScapeCounter = 0;

  const scrollToPage = (toPage) => {
    console.log("scrolling to page ", toPage);
    try {
      document.getElementsByClassName(toPage)[0].scrollIntoView({ block: "end", inline: "end", behavior: "smooth" });
    } catch (err) {
      console.log("err ", err);
    }
  };

  const handleScroll = debounce((e) => {
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
    console.log("prevpage ", pageList[prevPageNo], " currpage ", pageList[currPageNo]);
    //adding animation
    changeAnimation(prevPageNo, currPageNo);
    //trigger off load animation for curr page by setting setcurrpage then scroll to the new page
    setcurrPage(newPage);
    try {
      // scrollToPage(newPage);
    } catch (err) {
      console.log("err ", err);
    }
  }, 500);

  const changeAnimation = (prevPageNo, currPageNo) => {
    console.log("prevPageNo: ", prevPageNo, " currPageNo: ", currPageNo);
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
    } else if (currPageNo === 6) {
      setfooterClassList(" invisible ");
    } else {
      //currPage no ===2
      setheaderClassList(headerClassListScaleInFinished);
      setsearchBarClassList(searchBarBottomToTopMoreFinished);
      setstickyNotificationClassList(stickyNotificationBottomToTopMoreFinished);
      setfooterClassList(footerBottomToTopFinished);
      setcollectiveHeaderClassList(collectiveHeaderTopToBottomFinished);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", checkIfVisible);
  }, []);

  const checkIfVisible = (e) => {
    let secondPage = document.getElementsByClassName("second-page")[0];
    let mainPage = document.getElementsByClassName("main-page")[0];
    let notificationElem = document.getElementsByClassName("stickyNotification")[0];
    let searchBar = document.getElementsByClassName("searchBar")[0];
    let headerTitle = document.getElementsByClassName("headerTitle")[0];

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
          if (searchBar) {
            searchBar.style.animation = "bottomToTopMore 1s linear reverse 1 forwards";
          }
          let headerTitle = document.getElementsByClassName("headerTitle")[0];
          if (headerTitle) {
            headerTitle.style.animation = "scaleIn 0.9s 1 reverse forwards";
          }
          let footerElem1 = document.getElementsByClassName("footer")[0];
          let footerElem2 = document.getElementsByClassName("footer")[1];
          footerElem1.style.animation = "bottomToTopFooter 1s linear 1 forwards";
          footerElem2.style.animation = "bottomToTopFooter 1s linear 1 forwards";
          notificationElem.style.animation="bottomToTopFooter 0s  1 forwards";
        }
      }
    } else if (scrollDirection === "up") {
      let pageVisible = isVisible(secondPage);
      if (pageVisible) {
        if (secondPage) {
          if (searchBar) {
            searchBar.style.animation = "bottomToTopMore 1s linear  1 forwards";
          }
          let headerTitle = document.getElementsByClassName("headerTitle")[0];
          if (headerTitle) {
            headerTitle.style.animation = "scaleIn 0.9s 1 reverse forwards";
          }
          let footerElem1 = document.getElementsByClassName("footer")[0];
          let footerElem2 = document.getElementsByClassName("footer")[1];
          footerElem1.style.animation = "bottomToTopFooter 1s linear 1 reverse forwards";
          footerElem2.style.animation = "bottomToTopFooter 1s linear 1 reverse forwards";
          searchBar.style.animation = "bottomToTopMore 1.5s reverse 1 forwards";
          notificationElem.style.animation="bottomToTopMore 1.5s 1 reverse forwards";
        }
      }
    }

    if (searchBar) {
      searchBar.style.animation = "bottomToTopMore 1.5s 1 forwards";
    }
    if (headerTitle) {
      headerTitle.style.animation = "scaleIn 0.9s 1 forwards";
    }

    // let isSecondPageVisible = isVisible(secondPage);
    // console.log("isSecondPageVisible ", isSecondPageVisible);
    // if (secondPage && isSecondPageVisible) {
    //   let footerElem1 = document.getElementsByClassName("footer")[0];
    //   let footerElem2 = document.getElementsByClassName("footer")[1];
    //   footerElem1.style.animation = "bottomToTopFooter 1s linear 1 forwards";
    //   footerElem2.style.animation = "bottomToTopFooter 1s linear 1 forwards";
    // }
  };

  function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error("DomUtil: elem is not an element.");
    const style = getComputedStyle(elem);
    if (style.display === "none") return false;
    if (style.visibility !== "visible") return false;
    if (style.opacity < 0.1) return false;
    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }
    const elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) return true;
    } while ((pointContainer = pointContainer.parentNode));
    return false;
  }

  return (
    <div className="font-roboto bg-newGrey w-screen scroller" key={"app" + currPage} id="slider">
      <div className="md:fixed top-0 w-screen md:h-[15vh] z-50  md:bg-transparent">
        <div className={collectiveHeaderClassList}>
          <StickyNotificationAtTop bottomToTopAnimation={stickyNotificationClassList} />
          <div className=" px-1 md:px-8 ">
            <Header scaleInAnimation={headerClassList} />
            <SearchBarAndOtherComponents searchBarAnimation={searchBarClassList} animateSecondHeader={false} />
          </div>
        </div>
      </div>

      <section className={" opacity-1 scroll-child "}>
        <MainPage
          currentCar={currentCar}
          cityScapeList={cityScapeList}
          cityScapeCounter={cityScapeCounter}
          setcurrentCar={setcurrentCar}
        />
      </section>
      <section className={" opacity-1 scroll-child"}>
        <SecondPage animationDirection={secondPageAnimationDirection} />
      </section>
      <section className={" opacity-1 scroll-child"}>
        <ThirdPage />
      </section>
      <section className={" opacity-1 scroll-child"}>
        <FourthPage />
      </section>
      <section className={" opacity-1 scroll-child"}>
        <FifthPage />
      </section>
      <section className={" opacity-1 scroll-child"}>
        <SixthPage />
      </section>
      <section className={" opacity-1 scroll-child"}>
        <SeventhPage />
      </section>
      <div className={currPage.includes("seventh") ? " hidden " : " block "}>
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

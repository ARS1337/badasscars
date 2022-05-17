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
    console.log("scrolling to page ", toPage)
    try {
      document.getElementsByClassName(toPage)[0].scrollIntoView({ block: "end", inline: "end" });
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
    console.log('prevpage ',pageList[prevPageNo],' currpage ', pageList[currPageNo])
    //adding animation
    changeAnimation(prevPageNo, currPageNo);
    //trigger off load animation for curr page by setting setcurrpage then scroll to the new page
    setcurrPage(newPage);
    try{
      scrollToPage(newPage);
    }catch(err){
      console.log('err ',err)
    }
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
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    setcurrPage("main-page");
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="font-roboto bg-newGrey w-screen scroll-container"
      key={"app" + currPage}
      style={{ overflow: "hidden", scrollBehavior: "smooth" }}
      id='slider'
    >
      <div className="md:fixed top-0 w-screen md:h-[20vh] z-50 bg-newGrey md:bg-transparent">
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

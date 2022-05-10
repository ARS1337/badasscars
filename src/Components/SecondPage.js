import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import configs from "../config";
import Animations from "../utils/Animations";
import debounce from "../utils/debounce";
import ScrollContext from "../utils/ScrollContext";
import Footer from "./Footer";
import Header from "./Header";
import SearchBarAndOtherComponents from "./SearchBarAndOtherComponents";
import StickyNotificationAtTop from "./StickyNotificationAtTop";

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const CarDetails = (props) => {
  const classListCarDetails = `z-2 h-36 w-36  flex align-middle justify-center flex-col`;
  return (
    <div className="z-50 pt-8   flex align-middle justify-center flex-col  px-1 ">
      <div className="  border-CorrectBlack bg-CorrectGrey">
        <img src="/assets/carDetails.png" alt="car details" />
      </div>
      <div className="border border-t-0 border-CorrectBlack bg-CorrectGrey">
        <div className="flex align-middle justify-center font-oswald text-2xl py-4"> {props.details.name}</div>
        <div className="flex align-middle justify-center font-oswald text-sm pb-4">
          <div className="px-2 bg-CorrectYellow">1.390.00 KN</div>
        </div>
      </div>
    </div>
  );
};

function SecondPage(props) {
  const {
    scaleInAnimation,
    searchBarAnimation,
    bottomToTopAnimation,
    currentCar,
    paymentAnimation,
    carListingNoAnimation,
  } = props;

  const navigate = useNavigate();
  let lastScrollTop = 0;

  let handleScroll = debounce(() => {
    console.log("scrolled");
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      console.log("scroll down");
      navigate('/ThirdPage')
    } else {
      console.log("scroll up");
      navigate('/')
    }
  });

  // useEffect(() => {
  //   window.scrollTo(1,0)
  //   window.addEventListener("scroll", handleScroll);
  //   console.log("listener added");
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     console.log("listener removed");
  //   };
  // }, []);

  useEffect(() => {
    console.log('SecondPage mounted');
    return () => console.log('SecondPage unmounting...');
  }, [])

  const prevPage = window.currentPage;

  let headerClassList = "animate-scaleIn";
  let searchBarClassList = "animate-bottomToTopMore";
  let stickyNotificationClassList = "animate-bottomToTopMore";
  let footerClass = "animate-bottomToTopFooter";
  let collectiveHeaderClassList = "animate-bottomToTop";

  console.log("prevpage : ", prevPage, " includes MainPage? : ", prevPage.includes("MainPage"));
  if (!prevPage.includes("/")) {
    headerClassList = "animate-scaleInFinished";
    searchBarClassList = "animate-bottomToTopMoreFinished";
    stickyNotificationClassList = "animate-bottomToTopMoreFinished";
    footerClass = "animate-bottomToTopFooterFinished";
    collectiveHeaderClassList = "animate-bottomToTopFinished";
    console.log("added new finished classes");
  }
  // useEffect(() => {
  //   return () => {
  //     window.currentPage = "/SecondPage";
  //   };
  // }, []);

  useEffect(()=>{
    console.log('second page rendered')
    return ()=> window.currentPage='SecondPage'
  },[])

  return (
    <div>
      <StickyNotificationAtTop bottomToTopAnimation={stickyNotificationClassList} />
      <div className={collectiveHeaderClassList}>
        <div className="px-8 ">
          <Header scaleInAnimation={headerClassList} />
          <SearchBarAndOtherComponents searchBarAnimation={searchBarClassList} />
        </div>
      </div>

      <div
        className="p-12 relative font-roboto w-full h-full flex items-center justify-center flex-col "
        style={{ height: "65vh", width: "100vw" }}
      >
        <div className=" flex items-center justify-center font-oswald font-extrabold tracking-title z-10  pt-16 animate-secondPageToTop">
          THE BEST FROM THE OFFER
        </div>
        <div className="flex items-center justify-center flex-col px-24 sm:flex-row w-5/6 animate-secondPageToTop z-50">
          {configs.carList.map((details) => (
            <div key={details.id} className="px-2 z-10">
              <CarDetails details={details} />
            </div>
          ))}
        </div>
        <div className=" flex align-middle justify-center font-oswald font-bold tracking-title z-50 hover:cursor-pointer pt-8 hover:opacity-50 animate-secondPageToTop">
          REVIEW THE ENTIRE OFFER
        </div>

        <Animations
          key={12}
          height={40}
          width={40}
          positionTop={"60vh"}
          positionLeft={"10%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
        <Animations
          key={13}
          height={150}
          width={150}
          positionTop={"10vh"}
          positionLeft={"25%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
        <Animations
          key={14}
          height={200}
          width={200}
          positionTop={"10vh"}
          positionLeft={"75%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
      </div>
      <Footer currentCar={currentCar} paymentAnimation={footerClass} carListingNoAnimation={footerClass} />
    </div>
  );
}

export default SecondPage;

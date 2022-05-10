import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Animations from "../utils/Animations";
import debounce from "../utils/debounce";
import Footer from "./Footer";
import Header from "./Header";
import SearchBarAndOtherComponents from "./SearchBarAndOtherComponents";
import StickyNotificationAtTop from "./StickyNotificationAtTop";

const FirstContainer = () => {
  return (
    <div className="h-[60vh] flex flex-row min-h-full items-end justify-end w-full  relative">
      <div className=" flex items-end pb-12 absolute  left-0 bottom-0">
        <img src="/assets/forklift.png" alt="forklift" height="50%" width="50%" />
      </div>
      <div className="h-[60vh]  border border-l-0 border-black p-8 w-1/2">
        <div className="flex flex-col justify-between text-right  h-full">
          <div>
            <div className="pb-12 text-xl font-bold">WHOLESALE USER?</div>
            <div className=" text-xs">
              <div>Do you have a company and need to buy a larger quantity of products?</div>
              <div>Register and log in as a wholesale user and secure access to a special part of the store.</div>
            </div>
          </div>
          <div className="">
            <button className=" font-semibold text-sm bg-CorrectYellow">REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondContainer = () => {
  return (
    <div className="h-[60vh] flex flex-row min-h-full items-end justify-end w-full  relative">
      <div className="h-[60vh]  border border-r-0 border-black p-8 w-1/2">
        <div className="flex flex-col justify-between text-left w-full h-full">
          <div className="flex items-stretch justify-between flex-col text-left  h-full">
            <div className="pb-36 text-xl font-bold flex flex-row items-center text-left">
              <img src="/assets/Bag.png" alt="bag" className="pr-3" />
              <label>BADASS CLUB</label>
            </div>
            <div className=" flex items-start justify-between flex-col text-left  h-full">
              <div className="text-2xl font-bold  text-left">JOIN OUR BENEFITS CLUB.</div>
              <div className="text-xs text-left ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estemated.{" "}
              </div>
              <button className="text-xs text-left  font-semibold bg-CorrectYellow">FIND OUT MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start  h-full w-1/2 ">
        <div className=" font-extrabold text-9xl rotateText p-0 m-0  flex-col">
          <div id="value">948</div>
          <div>46.</div>
        </div>

        <div className="pb-8 font-bold">Satisfied Customers!</div>
      </div>
    </div>
  );
};

function ThirdPage(props) {
  const {
    scaleInAnimation,
    searchBarAnimation,
    bottomToTopAnimation,
    currentCar,
    paymentAnimation,
    footerClasscarListingNoAnimation,
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
  //   // window.scrollTo(0,0)
  //   window.addEventListener("scroll", handleScroll);
  //   console.log("listener added");
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     console.log("listener removed");
  //   };
  // }, []);

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

  function animateValue(start, end, duration) {
    setTimeout(() => {
      const obj = document.getElementById("value");
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, 800);
  }

  animateValue(958, 999, 1000);

  useEffect(() => {
    console.log("third page rendered");
    return () => (window.currentPage = "ThirdPage");
  }, []);

  return (
    <div>
      <StickyNotificationAtTop bottomToTopAnimation={stickyNotificationClassList} />
      <div className={collectiveHeaderClassList}>
        <div className="px-8">
          <Header scaleInAnimation={headerClassList} />
          <SearchBarAndOtherComponents searchBarAnimation={searchBarClassList} />
        </div>
      </div>

      <div
        className=" flex items-center justify-center h-full w-screen px-12 pt-16 animate-secondPageToTop"
        style={{ height: "70vh", width: "100%" }}
      >
        <div className=" w-1/2 flex items-center justify-center pr-4 z-10">
          <FirstContainer />
        </div>
        <div className="  w-1/2 flex items-center justify-center pl-4 z-10">
          <SecondContainer />
        </div>
        <Animations
          key={34}
          height={350}
          width={350}
          positionTop={"25vh"}
          positionLeft={"5%"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
        <Animations
          key={32}
          height={180}
          width={180}
          positionTop={"0vh"}
          positionLeft={"80vw"}
          animationClassList="animate-rotate animate-bounceCustom z-0"
        />
      </div>
      <Footer currentCar={currentCar} paymentAnimation={footerClass} carListingNoAnimation={footerClass} />
    </div>
  );
}

export default ThirdPage;

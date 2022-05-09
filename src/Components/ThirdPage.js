import React, { useContext, useEffect, useState } from "react";
import Animations from "../utils/Animations";
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
        <div className=" font-extrabold text-9xl rotateText p-0 m-0  ">46.948</div>
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
    carListingNoAnimation,
  } = props;

  const [prevPage, setprevPage] = useState("");

  useEffect(() => {
    console.log("second page loaded");
    setprevPage(window.currentPage);
    window.currentPage = "/ThirdPage";
  }, []);

  return (
    <div>
      <StickyNotificationAtTop bottomToTopAnimation={bottomToTopAnimation} />
      <div className="px-8 animate-bottomToTop">
        <Header scaleInAnimation={scaleInAnimation} />
        <SearchBarAndOtherComponents searchBarAnimation={searchBarAnimation} />
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
      <Footer
        currentCar={currentCar}
        paymentAnimation={paymentAnimation}
        carListingNoAnimation={carListingNoAnimation}
      />
    </div>
  );
}

export default ThirdPage;

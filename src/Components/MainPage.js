import React, { Suspense, useContext, useEffect, useRef, useState } from "react";
import Animations from "../utils/Animations";
import Header from "./Header";
import SearchBarAndOtherComponents from "./SearchBarAndOtherComponents";
import StickyNotificationAtTop from "./StickyNotificationAtTop";
import Cars from "./Cars";
import configs from "../config";
import Footer from "./Footer";
import "../styles/App.css";
import { useLocation, useNavigate } from "react-router-dom";
import debounce from "../utils/debounce";

function MainPage(props) {
  const { currentCar, setcurrentCar, scaleInAnimation, searchBarAnimation, bottomToTopAnimation } = props;
  const [carClassList, setcarClassList] = useState(
    "flex align-middle justify-center flex-row  relative animate-none z-40"
  );
  const [animationClassList, setanimationClassList] = useState("animate-rotate animate-bounceCustom z-1");
  const [cityScapeClassList, setcityScapeClassList] = useState("absolute z-0 pt-32");
  const [buyNowClassList, setbuyNowClassList] = useState(
    " animate-onlyBounce absolute text-white rounded-full h-24 w-24 bg-[#292F33] z-50 border-8 border-[#EEFF00] top-[50%] left-[40%] font-oswald           border-opacity-50 font-bold hover:opacity-50 hover:cursor-pointer  "
  );
  let lastScrollTop = 0;

  const navigate = useNavigate();

  let handleScroll = debounce(() => {
    console.log("scrolled");
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      console.log("scroll down");
      navigate('/SecondPage')
    } else {
      console.log("scroll up");
      //dont navigate
    }
  });

  // useEffect(() => {
  //   window.scrollTo(0,0)
  //   window.addEventListener("scroll", handleScroll);
  //   console.log("listener added");
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     console.log("listener removed");
  //   };
  // }, []);

  const prevPage = window.currentPage;
  console.log("MainPage loaded and prevpage was ", prevPage);
  window.currentPage = "/MainPage";

  useEffect(() => {
    console.log("main page rendered");
    return () => (window.currentPage = "/MainPage");
  }, []);

  useEffect(() => {
    console.log("MainPage mounted");
    return () => console.log("MainPage unmounting...");
  }, []);

  const returnNewClassList = (currentClassList, newClassToAdd) => {
    let carClassListArray = currentClassList.split(" ");
    let baseClassList = carClassListArray.filter((x) => !x.includes("animate"));
    let newClassListString = baseClassList.join(" ") + " " + newClassToAdd;
    return newClassListString;
  };

  const setNewClass = (currCarClass, newCarClass, newCarNo, wait = 1000, classSetter) => {
    console.log("set new class called");
    setanimationClassList("animate-rotate animate-bounceCustom z-1");
    if (currentCar > newCarNo) {
      // setcityScapeClassList(cityScapeClassList+" animate-moveBackgroundLinearToLeft")
      // setcityScapeClassList(cityScapeClassList + " bg-left");
    } else if (currentCar < newCarNo) {
      // setcityScapeClassList(cityScapeClassList+" animate-moveBackgroundLinearToRight")
      // setcityScapeClassList(cityScapeClassList + " bg-right");
    }
    let newClassListString = returnNewClassList(carClassList, currCarClass);
    classSetter(newClassListString);
    setbuyNowClassList(buyNowClassList + "visible ");
    setcurrentCar(currentCar);
    if (newCarClass) {
      setTimeout(() => {
        let newClassListString = returnNewClassList(carClassList, newCarClass);
        classSetter(newClassListString);
        setbuyNowClassList(buyNowClassList + "visible animate-onlyBounce z-50 ");
        setcurrentCar(newCarNo);
      }, [wait]);
    }
  };

  return (
    <div className="bg-CorrectGrey overflow-hidden" key="main">
      <div className="font-roboto bg-CorrectGrey h-screen">
        <div className=" min-h-screen z-[1] overflow-hidden">
          <img
            src="/assets/cityscape.png"
            height="100%"
            width="100%"
            alt="cityscape"
            className={cityScapeClassList}
            key={currentCar + 10}
          />
          <StickyNotificationAtTop bottomToTopAnimation=" animate-[bottomToTopMoreMainPage_1s_ease-in-out_1_reverse] " />

          <div className="px-8 ">
            <Header
              scaleInAnimation=" animate-[scaleIn_1s_ease-in-out_1_reverse]  "
              bottomToTopAnimation=" animate-[bottomToTopMoreMainPage_1s_ease-in-out_1_reverse] "
            />
            <SearchBarAndOtherComponents
              searchBarAnimation=" animate-[bottomToTopMoreMainPage_1s_ease-in-out_1_reverse] "
              animateSecondHeader={true}
            />
          </div>
          <div className="flex align-middle justify-center  w-screen ">
            <Cars
              carDetails={configs?.carList[currentCar]}
              key={currentCar + 8}
              currentCar={currentCar}
              carClassList={carClassList}
              setNewClass={setNewClass}
              noOfCars={configs?.carList?.length}
              setcarClassList={setcarClassList}
              setbuyNowClassList={setbuyNowClassList}
              buyNowClassList={buyNowClassList}
            />
            <Animations
              key={currentCar + 2}
              height={150}
              width={150}
              positionTop={"50%"}
              positionLeft={"78%"}
              animationClassList={animationClassList}
            />
            <Animations
              key={currentCar + 3}
              height={50}
              width={50}
              positionTop={"30%"}
              positionLeft={"60%"}
              animationClassList={animationClassList}
            />
            <Animations
              key={currentCar + 4}
              height={350}
              width={350}
              positionTop={"25%"}
              positionLeft={"12%"}
              animationClassList={animationClassList}
            />
          </div>
        </div>
      </div>
      <Footer
        currentCar={currentCar}
        paymentAnimation={"animate-[bottomToTopFooter_1s_ease-in-out_1_reverse]"}
        carListingNoAnimation={"animate-[bottomToTopFooter_1s_ease-in-out_1_reverse]"}
      />
    </div>
  );
}

export default MainPage;

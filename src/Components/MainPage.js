import React, { Suspense, useEffect, useState } from "react";
import Animations from "../utils/Animations";
import Header from "./Header";
import SearchBarAndOtherComponents from "./SearchBarAndOtherComponents";
import StickyNotificationAtTop from "./StickyNotificationAtTop";
import Cars from "./Cars";
import configs from "../config";
import Footer from "./Footer";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function MainPage(props) {
  const navigate = useNavigate();
  const [currentCar, setcurrentCar] = useState(0);
  const [carClassList, setcarClassList] = useState(
    "flex align-middle justify-center flex-row  relative animate-none z-50"
  );
  const [animationClassList, setanimationClassList] = useState("animate-rotate animate-bounceCustom z-1");
  const [cityScapeClassList, setcityScapeClassList] = useState("absolute z-0 pt-32");
  const navigateTo = () => {
    // navigate("/SecondPage");
    console.log('"/SecondPage"');
  };

  const returnNewClassList = (currentClassList, newClassToAdd) => {
    let carClassListArray = currentClassList.split(" ");
    let baseClassList = carClassListArray.filter((x) => !x.includes("animate"));
    let newClassListString = baseClassList.join(" ") + " " + newClassToAdd;
    return newClassListString;
  };

  const setNewClass = (currCarClass, newCarClass, newCarNo, wait = 1000, classSetter) => {
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
    setcurrentCar(currentCar);
    if (newCarClass) {
      setTimeout(() => {
        let newClassListString = returnNewClassList(carClassList, newCarClass);
        classSetter(newClassListString);
        setcurrentCar(newCarNo);
      }, [wait]);
    }
  };
  useEffect(() => {
    setNewClass("animate-ltr1", 0, currentCar, 0, setcarClassList);
  }, []);

  useEffect(() => {
    console.log("cityScapeClassList ", cityScapeClassList);
  }, [cityScapeClassList]);

  return (
    <div className="bg-CorrectGrey">
      <div className="font-roboto bg-CorrectGrey h-full" onScroll={navigateTo}>
        <div className=" min-h-screen z-[1] overflow-hidden">
          <img
            src="/assets/cityscape.png"
            height="100%"
            width="100%"
            alt="cityscape"
            className={cityScapeClassList}
            key={currentCar + 10}
          />
          <StickyNotificationAtTop />
          <div className="px-8 z-50 sticky top-0">
            <Header />
            <SearchBarAndOtherComponents />
          </div>
          <div className="z-[2]">
            <Cars
              carDetails={configs?.carList[currentCar]}
              key={currentCar + 8}
              currentCar={currentCar}
              carClassList={carClassList}
              setNewClass={setNewClass}
              noOfCars={configs?.carList?.length}
              setcarClassList={setcarClassList}
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
            <div className="absolute bottom-8  w-full max-h-xs">
              <Footer currentCar={currentCar} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: "100vh" }}>
        <SecondPage />
      </div>
      <div style={{ minHeight: "100vh" }}>
        <ThirdPage />
      </div>
    </div>
  );
}

export default MainPage;

import React, { useEffect, useState } from "react";
import Animations from "../utils/Animations";
import Cars from "./Cars";
import configs from "../config";
import "../styles/App.css";
import StickyNotificationAtTop from "./StickyNotificationAtTop";

function MainPage(props) {
  const { currentCar, setcurrentCar, cityScapeCounter, cityScapeList } = props;
  const [carClassList, setcarClassList] = useState(
    "flex items-center justify-center flex-row  relative animate-none z-50  pb-4"
  );
  const [cityScapeClassList, setcityScapeClassList] = useState("animate-cityscape ");
  const [animationClassList, setanimationClassList] = useState("animate-rotate animate-bounceCustom z-1");
  const [buyNowClassList, setbuyNowClassList] = useState(
    " animate-buyNowAnimation absolute text-white rounded-full h-8 w-8 text-[3px] md:text-base md:h-24 md:w-24 bg-[#292F33]  border-2 top-[40%] md:top-[45%] md:border-8 border-[#EEFF00] flex items-center justify-center font-oswald           border-opacity-50 font-bold hover:opacity-50 hover:cursor-pointer  "
  );
  const leftTyreBaseClasses = " absolute z-50  bottom-[11%] md:bottom-0 lg:bottom-0  left-[12.1%] ";
  const rightTyreBaseClasses = " absolute z-50 bottom-[11%] md:bottom-1 lg:bottom-1 right-[10.5%] ";

  const [leftTyreAnimation, setleftTyreAnimation] = useState(leftTyreBaseClasses + " " + "animate-none");
  const [rightTyreAnimation, setrightTyreAnimation] = useState(rightTyreBaseClasses + " " + "animate-none");

  const returnNewClassList = (currentClassList, newClassToAdd) => {
    let carClassListArray = currentClassList.split(" ");
    let baseClassList = carClassListArray.filter((x) => !x.includes("animate"));
    let newClassListString = baseClassList.join(" ") + " " + newClassToAdd;
    return newClassListString;
  };

  const setNewClass = (currCarClass, newCarClass, newCarNo, wait = 1000, classSetter, direction) => {
    //tyre animation
    if (direction === "left") {
      setleftTyreAnimation(leftTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_forwards]");
      setrightTyreAnimation(rightTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_forwards]");
    } else if (direction === "right") {
      setleftTyreAnimation(leftTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_reverse_forwards]");
      setrightTyreAnimation(rightTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_reverse_forwards]");
    }
    if (direction == "left") {
      setcityScapeClassList("animate-cityscape");
    } else {
      setcityScapeClassList("animate-cityscapeReverse");
    }
    setTimeout(() => {
      setleftTyreAnimation(leftTyreBaseClasses + " " + "animate-[wheel_0s_linear_infinite_reverse_forwards]");
      setrightTyreAnimation(rightTyreBaseClasses + " " + "animate-[wheel_0s_linear_infinite_reverse_forwards]");
    }, 2250);
    // yellow plus animation
    setanimationClassList("animate-rotate animate-bounceCustom z-1");
    //setting car movement animation initial
    let newClassListString = returnNewClassList(carClassList, currCarClass);
    classSetter(newClassListString);
    setbuyNowClassList(buyNowClassList + "visible ");

    setcurrentCar(currentCar);

    //if new car will be shown then the movement animation for that car
    if (newCarClass) {
      setTimeout(() => {
        let newClassListString = returnNewClassList(carClassList, newCarClass);
        classSetter(newClassListString);
        setbuyNowClassList(buyNowClassList + "visible animate-onlyBounce  ");
        if (direction == "left") {
          setcityScapeClassList("animate-cityscapeFinished");
        } else {
          setcityScapeClassList("animate-[cityscapeReverse_0s_linear_1_forwards]");
        }
        setcurrentCar(newCarNo);
      }, [wait]);
    }
  };

  return (
      <div
        className="overflow-hidden main-page scroll-area z-0  md:h-screen main-page animate-secondPageTopToBottom bg-[#CED6DC]"
        key="main"
      >
        <StickyNotificationAtTop/>
        <div className="font-roboto md:mb-36  md:pt-[10vh]  ">
          <div id="sliding-background" className={cityScapeClassList} key={cityScapeClassList + currentCar + 99}></div>
          <div className=" md:min-h-[70vh]  overflow-hidden bg-newGrey ">
            <div className="flex items-center justify-center ">
              <Cars
                carDetails={configs?.carList[currentCar]}
                currentCar={currentCar}
                carClassList={carClassList}
                setNewClass={setNewClass}
                noOfCars={configs?.carList?.length}
                setcarClassList={setcarClassList}
                setbuyNowClassList={setbuyNowClassList}
                buyNowClassList={buyNowClassList}
                leftTyreAnimation={leftTyreAnimation}
                rightTyreAnimation={rightTyreAnimation}
                key={currentCar}
              />
              <div>
                <div className="hidden md:block lg:block">
                  <Animations
                    key={currentCar + 2}
                    height={0.15}
                    width={0.15}
                    positionTop={"45%"}
                    positionLeft={"72%"}
                    animationClassList={animationClassList}
                  />
                  <Animations
                    key={currentCar + 3}
                    height={0.02}
                    width={0.02}
                    positionTop={"30%"}
                    positionLeft={"60%"}
                    animationClassList={animationClassList}
                  />
                  <Animations
                    key={currentCar + 4}
                    height={0.3}
                    width={0.3}
                    positionTop={"25%"}
                    positionLeft={"5%"}
                    animationClassList={animationClassList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default MainPage;

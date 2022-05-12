import React, { useState } from "react";
import Animations from "../utils/Animations";
import Cars from "./Cars";
import configs from "../config";
import "../styles/App.css";

function MainPage(props) {
  const { currentCar, setcurrentCar } = props;
  const [carClassList, setcarClassList] = useState(
    "flex align-middle justify-center flex-row  relative animate-none z-40  pb-4"
  );
  const [animationClassList, setanimationClassList] = useState("animate-rotate animate-bounceCustom z-1");
  const [cityScapeClassList, setcityScapeClassList] = useState("absolute z-0 pt-20 w-screen");
  const [buyNowClassList, setbuyNowClassList] = useState(
    " animate-onlyBounce absolute text-white rounded-full h-24 w-24 bg-[#292F33] z-50 border-8 border-[#EEFF00] top-[50%] left-[40%] font-oswald           border-opacity-50 font-bold hover:opacity-50 hover:cursor-pointer  "
  );

  const leftTyreBaseClasses = " absolute z-50 bottom-0 left-[12.1%] ";
  const rightTyreBaseClasses = " absolute z-50 bottom-1 right-[10.5%] ";

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
    if (direction == "left") {
      setleftTyreAnimation(leftTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_forwards]");
      setrightTyreAnimation(rightTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_forwards]");
    } else if (direction == "right") {
      setleftTyreAnimation(leftTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_reverse_forwards]");
      setrightTyreAnimation(rightTyreBaseClasses + " " + "animate-[wheel_4s_linear_infinite_reverse_forwards]");
    }
    setTimeout(() => {
      setleftTyreAnimation(leftTyreBaseClasses + " " + "animate-[wheel_0s_linear_infinite_reverse_forwards]");
      setrightTyreAnimation(rightTyreBaseClasses + " " + "animate-[wheel_0s_linear_infinite_reverse_forwards]");
    }, 2250);
    // yellow plus animation
    setanimationClassList("animate-rotate animate-bounceCustom z-1");
    //cityScape movement animation
    if (currentCar > newCarNo) {
      setcityScapeClassList(cityScapeClassList + " animate-moveBackgroundLinearToLeft");
      setcityScapeClassList(cityScapeClassList + " bg-left");
    } else if (currentCar < newCarNo) {
      setcityScapeClassList(cityScapeClassList + " animate-moveBackgroundLinearToRight");
      setcityScapeClassList(cityScapeClassList + " bg-right");
    }
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
        setbuyNowClassList(buyNowClassList + "visible animate-onlyBounce z-50 ");
        setcurrentCar(newCarNo);
      }, [wait]);
    }
  };

  return (
    <div
      className="overflow-hidden main-page scroll-area z-50  pt-[20vh] mb-36 h-screen main-page animate-secondPageTopToBottom"
      key="main"
    >
      <div className="font-roboto ">
        <div className=" min-h-screen z-[1] overflow-hidden ">
          {/* <img
            src="/assets/cityscape.jpg"
            height="100%"
            width="100%"
            alt="cityscape"
            className={cityScapeClassList}
            key={currentCar + 10}
          /> */}
          <div className="flex items-center justify-center ">
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
              leftTyreAnimation={leftTyreAnimation}
              rightTyreAnimation={rightTyreAnimation}
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
    </div>
  );
}

export default MainPage;
